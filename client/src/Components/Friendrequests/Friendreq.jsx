// import React, { useEffect } from 'react'
// import '../Friendrequests/Friendreq.css'
// import { useSelector } from 'react-redux';

// const Friendreq = ({Friendrequests}) => {
//   const userData = useSelector((state)=>state.userDetails.userInfo[0])
//   if(userData){
//     var userId = userData._id;

//   }
//     const acceptFriend = async()=>{

//     }
//     const deleteReq =()=>{

//     }
//     console.log('friend request in jsx',Friendrequests);
//   return (
//     <div className='friend-req-p'>
//       {Friendrequests ? Friendrequests.map((req)=>(
//         <div className="friend-req" key={req._id}>
//         <h6 className='user-req-name'>friend request from </h6>
//             <div className="div-b">
//               <div className='accept-b' onClick={acceptFriend}>accept</div>
//               <div className='reject-b' onClick={deleteReq}>reject</div>
//             </div>
//         </div>
//       )):(<>loading</>)}

//     </div>
//   )
// }

// export default Friendreq
import React from "react";
import "../Friendrequests/Friendreq.css";
import { useSelector } from "react-redux";
import { AddFriendApi } from "../../Api/FriendsApi";

const Friendreq = ({ friendrequests }) => {
  const userData = useSelector((state) => state.userDetails.userInfo[0]);
  if (userData) {
    var userId = userData._id;
  }

  const acceptFriend = async (newFriendId) => {
    await AddFriendApi(userId, { newFriendId });
  };

  const deleteReq = async () => {
    // Implement deleteReq logic
  };

  console.log("friend requests in JSX", friendrequests);

  return (
    <div className="friend-req-p">
      {friendrequests ? (
        friendrequests.map((request) => (
          <div className="friend-req" key={request._id}>
            <h6 className="user-req-name">
              Friend request from {request.firstname} {request.lastname}
            </h6>
            <div className="div-b">
              <div
                className="accept-b"
                onClick={() => acceptFriend(request._id)}
              >
                Accept
              </div>
              <div className="reject-b" onClick={deleteReq}>
                Reject
              </div>
            </div>
          </div>
        ))
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Friendreq;
