import React from 'react'
import '../Messages/Messages.css'
const Messages = () => {
  return (
    <div className='messages-c'>
      <div className="messages-c-msg">
      <div className="message-user-pic">
          <img src='https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' alt='profile-pic' />

        </div>
        <div className="message-content-msg">
          
          <p className='message-sender-name'>nameee</p>
          <p className='message-text-msg'>helllooo</p>
          
          <p className='message-time-msg'>23:03 </p>
        </div>
      </div>
      <div className="messages-c-msg">
      <div className="message-user-pic">
          <img src='https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' alt='profile-pic' />

        </div>
        <div className="message-content-msg">
          <p className='message-sender-name'>nameee</p>
          <p className='message-text-msg'>helllooo</p>
          <p className='message-time-msg'>23:03 </p>
        </div>
      </div>
        
    </div>
  )
}

export default Messages