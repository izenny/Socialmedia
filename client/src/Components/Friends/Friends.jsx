import React, { useEffect, useState } from "react";
import "../Friends/Friends.css";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FriendsApi } from "../../Api/FriendsApi";
import Friendreq from "../Friendrequests/Friendreq";
const Friends = ({ friends }) => {
  // const [friends, setfriends] = useState()
  // useEffect(()=>{
  //   const friendsFunction = async()=>{
  //     try{
  //       const fetchedFriends = FriendsApi(userId)
  //       setfriends(fetchedFriends)
  //     }catch(err){
  //       console.log('err in friend jsx',err);
  //     }

  //   }
  //   friendsFunction()
  // },[])
  return (
    <div>
      <div className="friends-div">
        {/* <p className='tag-name'>friends</p> */}

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
                  <div className="contact-icons">
                    <MdMessage />
                  </div>
                  <div className="contact-icons">
                    <MdPersonRemove />
                  </div>
                  {/* <div className='contact-icons'><FaVideo /></div> */}
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
