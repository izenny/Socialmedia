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
exports.getChats = async (req, res)=>{
  try{
    
    const userId = req.params.userId;
    console.log('user iiiiidd',userId);
    const chats = await Chat.find({
      participants:userId
    })
    res.status(200).json(chats)
  }catch(err){
    console.log('got error when fetching chats');
    res.status(500).json({ message: "crte chat Error" });
  }
}