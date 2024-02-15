import React, { useEffect, useState } from "react";
import "../Friends/Friends.css";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FriendsApi } from "../../Api/FriendsApi";
import Friendreq from "../Friendrequests/Friendreq";
import { useSelector } from "react-redux";
import { NewChatApi } from "../../Api/ChatApi";

const Friends = ({ friends, setChat }) => {
  const userData = useSelector((state) => state.userDetails.userInfo[0]);
  if (userData) {
    var userId = userData._id;
  }

  const startChat = async (friendId) => {
    try {
      // setChat();
      console.log('avdhfvahgd',userId);
      console.log('avdhfvahgd',friendId);
      const newChat = await NewChatApi({userId,friendId})
      console.log('new chat', newChat);
    } catch (err) {
      console.log("Error starting chat:", err);
    }
  };

  return (
    <div>
      <div className="friends-div">
        <div className="friends-section">
          {friends ? (
            friends.map((friend) => (
              <div className="friends" key={friend._id}>
                <div className="profile-pic-f">
                  <img
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="prp"
                  />
                </div>
                <div className="name-div">
                  <h5 className="friend-name">
                    {friend.firstname} {friend.lastname}
                  </h5>
                </div>
                <div className="icons-f-c">
                  <div
                    className="contact-icons"
                    onClick={() => startChat(friend._id)}
                  >
                    <MdMessage />
                  </div>
                  <div className="contact-icons">
                    <MdPersonRemove />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>Loading friends</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
