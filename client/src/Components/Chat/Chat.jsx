
import React from 'react';
import './Chat.css'; // Import the CSS file
import { IoMdSend } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Chat = () => {
  return (
    <div className='chat-p'>
      <div className='chat'>
        <div className='header-chat'>
          <div className='chat-user-pic'>
            <img src='https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' alt='profile-pic' />
          </div>
          <div className='chat-user-name'>
            <h5>name</h5>
          </div>
          <div className='chat-header-icon'>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className='messages'>
          <div className='message received'>Hello there!</div>
          <div className='message sent'>Hi! How are you?</div>
          {/* Add more messages here */}
        </div>
        <div className='footer-chat'>
          <input type='text' placeholder='Type a message...' />
          <IoMdSend className='send-chat-button' />
        </div>
      </div>
    </div>
  );
};

export default Chat;

// import React, { useState, useEffect } from "react";
// import { IoMdSend } from "react-icons/io";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5001"); // Replace with your server's origin

// const Chat = ({ roomId }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     socket.emit("join room", roomId);

//     socket.on("chat message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });
//   }, [roomId]);

//   const sendMessage = async () => {
//     const { senderId, content } = input;
//     const response = await fetch("http://localhost:5001/chat/message", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ roomId, senderId, content }),
//     });

//     if (response.ok) {
//       setInput({ senderId: "", content: "" });
//     }
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>
//             <strong>{message.sender}</strong>: {message.content}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="sender"
//           value={input.senderId}
//           onChange={(e) => setInput({ ...input, senderId: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="message"
//           value={input.content}
//           onChange={(e) => setInput({ ...input, content: e.target.value })}
//         />
//         <button onClick={sendMessage}>
//           <IoMdSend />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
