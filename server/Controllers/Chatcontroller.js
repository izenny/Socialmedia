const Chat = require("../Modals/Chatschema");
const uuid = require("uuid")
const Message = require('../Modals/Messageschema')
// exports.incomingMessage = async (req, res) => {
//     try {
//         const { roomId, senderId, content } = req.body;
//         const chat = await Chat.findOne({ room: roomId });
//         if (!chat) {
//             const newChat = new Chat({
//                 room: roomId,
//                 message: [{ sender: senderId, content }],
//             });
//             await newChat.save();
//             io.to(roomId).emit('chat message', { sender: senderId, content });
//         } else {
//             chat.message.push({ sender: senderId, content });
//             await chat.save();
//             io.to(roomId).emit('chat message', { sender: senderId, content });
//         }
//         res.status(201).json({ message: 'message send successfully' });
//     } catch (err) {
//         console.log('err creating message', err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };
exports.incomingMessage = async (req, res) => {
  try {
    const { roomId, senderId, content } = req.body;
    const chat = await Chat.findOne({ room: roomId });
    if (!chat) {
      const roomId = uuid.v4()
      console.log('room id',roomId)
      const newChat = new Chat({
        room: roomId,
        message: [{ sender: senderId, content }],
      });
      await newChat.save();
      io.to(roomId).emit("chat message", { sender: senderId, content });
    } else {
      chat.message.push({ sender: senderId, content });
      await chat.save();
      io.to(roomId).emit("chat message", { sender: senderId, content });
    }
    res.status(201).json({ message: "message send successfully" });
  } catch (err) {
    console.log("err creating message", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// create new chat

exports.NewChat = async (req, res)=>{
  const {userId, friendId} = req.body
  try{
    const chat = await Chat.findOne({
      participants:{$all : [userId,friendId] }
    })
    if(!chat){
      const roomId = uuid.v4()
      console.log('room id',roomId)
      const newChat = new Chat({
        room:roomId,
        participants:[userId,friendId],
      })
      await newChat.save()
      res.status(200).json(newChat)
    }else{
      res.status(200).json(chat)
    }
  }catch(err){
    console.log('got error when creating new chat ',err);
    res.status(500).json({ message: "crte chat Error" });
  }
}
// exports.getChats = async (req, res)=>{
//   try{
    
//     const userId = req.params.userId;
//     console.log('user iiiiidd',userId);
//     const chats = await Chat.find({
//       participants:userId
//     })
    
//     .populate("participants", "firstname lastname")
//     res.status(200).json(chats)
//   }catch(err){
//     console.log('got error when fetching chats');
//     res.status(500).json({ message: "crte chat Error" });
//   }
// }
exports.getChats = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('user iiiiidd', userId);
    const chats = await Chat.find({
      participants: userId
    })
      .populate("participants", "firstname lastname")
      .populate({
        path: 'messages',
        options: { sort: { timestamp: -1 }, limit: 1 },
        populate: { path: 'sender', select: 'firstname lastname' }
      });

    const formattedChats = chats.map(chat => {
      const lastMessage = chat.messages.length > 0 ? {
        sender: chat.messages[0].sender.firstname + ' ' + chat.messages[0].sender.lastname,
        content: chat.messages[0].content,
        timestamp: chat.messages[0].timestamp,
        id : chat._id,
      } : null;

      return {
        participants: chat.participants,
        room: chat.room,
        lastMessage: lastMessage,
        id : chat._id,
        

      };
    });
    console.log(formattedChats);
    res.status(200).json(formattedChats);
  } catch (err) {
    console.log('got error when fetching chats', err);
    res.status(500).json({ message: "create chat Error" });
  }
}
