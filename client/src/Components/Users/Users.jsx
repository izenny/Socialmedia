import React, { useEffect, useState } from 'react'
import '../Users/Users.css'
import { FaUserMinus } from "react-icons/fa";
import { IoMdPersonAdd, IoMdRemoveCircle } from "react-icons/io";
import { friedRequest, usersData } from '../../Api/UsersApi';
import { friendNotification } from '../../Api/NotificationApi';
import { useSelector } from 'react-redux';
const Users = ({searchusers}) => {
  // const [users, setUsers] = useState([]);
  const [requestSent, setRequestSent] = useState({})
  const userData = useSelector((state)=>state.userDetails.userInfo[0])
  const addFriend = async (userId)=>{
    try{
      if(userData){
        var userName = userData.firstname;
        var friendreqId = userData._id;
        console.log('.....', userName);
      }
      
      const NewFriendReq = {
        user : userId,
        type : 'friend request',
        content : `you got new friend request from ${userName} `,
        read : false,
      }
      console.log('friend req data send',NewFriendReq);
      await friendNotification(NewFriendReq);
      await friedRequest(userId,friendreqId)
      //////////////
      
////////////////////////
    console.log('Friend request sent successfully.');

    }catch(err){
      console.log('err sending frend request',err);
    }
    
  }
  // useEffect(()=>{
  //   const fetchUsers = async()=>{
  //     try{
  //       const users = await usersData();
  //       setUsers(users);
        
  //     }catch(err){
  //       console.log('err fetching users', err);
  //     }
  //   }
  //   fetchUsers();
  // },[])
  console.log('usersss prop',searchusers);
  return (
    <div className="users">
    {searchusers ? (searchusers.map((user) => (
      <div key={user._id} className="user">
        <div className="pro-picture">
          <img className="imge" src={user.profilePicture} alt="" />
        </div>
        <div className="user-de">
          <div className="user-name">
            <h6>{user.firstname}</h6>
          </div>
          <div className="user-icons">
            <div id="add-user" onClick={()=>addFriend(user._id)} className="icon-fa">
              {user.friendrequest.includes(userData?._id)?<FaUserMinus />:<IoMdPersonAdd />}
              
            </div>
            <div id="delete-user" className="icon-fa">
              <IoMdRemoveCircle />
            </div>
          </div>
        </div>
      </div>
    ))):(<h2>Loading...</h2>)}
  </div>
);
};

export default Users
