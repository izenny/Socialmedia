import React from "react";
import "../Messages/Messages.css";

const Messages = () => {
  return (
    <div className="messages-p">
      <div className="message-m">
        <div className="prp">
          <img
            className="message-user-pic"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="prp"
          />
        </div>
        <div className="message-user-name">
          <h5>namegd</h5>

          <div className="message-last-m">
            <p>meskhasgdhsakjjkasjs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
