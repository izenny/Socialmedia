// import React, { useEffect, useState } from 'react'
// import '../Messages/Messages.css'
// import { ChatDataApi } from '../../Api/ChatApi'
// const Messages = () => {
//   const [chatmsg , setChatmsg] = useState()
//   useEffect(()=>{
//     const Chats = async ()=>{
//       try{
//         const chatdata = ChatDataApi(userId)
//         setChatmsg(chatdata)
//       }catch(err){
//         console.log("chatssss in jsx",err);
//       }
//     }
//   })
//   return (
//     <div className='messages-c'>
//       {chatmsg? chatmsg.map((msg)=>{
//         <div className="messages-c-msg">
//         <div className="message-user-pic">
//             <img src='https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' alt='profile-pic' />
  
//           </div>
//           <div className="message-content-msg">
//             <div>
//             <p className='message-sender-name'>nameee</p>
//             <p className='message-text-msg'>helllooo</p>
//             </div>
            
//             <div className='message-time-msg'>
//               <p >23:03 </p>
//             </div>
            
//           </div>

//       }):(<>Loading</>)}
     
        
//     </div>
//   )
// }

// export default Messages
import React, { useEffect, useState } from 'react';
import '../Messages/Messages.css';
import { ChatDataApi } from '../../Api/ChatApi';
import { useSelector } from 'react-redux';

const Messages = () => {
  const [chatmsg, setChatmsg] = useState([]);
  const userData = useSelector((state) => state.userDetails.userInfo[0]);
  if (userData) {
    var userId = userData._id;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('useriddddddd',userId);
        const chatdata = await ChatDataApi(userId);
        setChatmsg(chatdata);
      } catch (err) {
        console.log("Error fetching chat data:", err);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array to useEffect to run the effect only once

  return (
    <div className='messages-c'>
      {chatmsg ? (
        chatmsg.map((msg) => (
          <div className="messages-c-msg" key={msg._id}>
            <div className="message-user-pic">
              <img src='https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' alt='profile-pic' />
            </div>
            <div className="message-content-msg">
              <div>
                <p className='message-sender-name'>name</p>
                <p className='message-text-msg'>{msg.messageText}</p>
              </div>
              <div className='message-time-msg'>
                <p>{msg.timestamp}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Messages;
