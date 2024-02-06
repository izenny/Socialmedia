import React, { useEffect, useState } from "react";
import "./Post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart, FaHeart, FaRegComment, FaComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { LikePostApi, PostData } from "../../Api/PostApi";
import { useSelector } from "react-redux";
import { commentNotificationApi, likeNotificationApi } from "../../Api/NotificationApi";

const Post = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.userDetails.userInfo[0]);
  if (userData) {
    var userName = userData.firstname;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await PostData(userId);

        setPosts(fetchedPosts);
      } catch (err) {
        console.log("err in post", err);
      }
    };

    fetchPosts();
  }, [userId]);

  const handleLike = async (postId,postUserName) => {
    const NewLikeNotificationdata = {
      user: userId,
      type: "Like",
      content: `${postUserName} liked your post`,
      read: false,
    };
    try {
      await likeNotificationApi(NewLikeNotificationdata);
      await LikePostApi(userId,postId)
      
    } catch (err) {
      console.log("like functin error");
    }
    console.log(`Liked post with ID: ${postId}`);
    // You can implement logic to update the like count and send a request to your API to update the server-side data
  };

  const handleComment =  async (postId,postUserName) => {
    const NewCommentNotificationdata = {
      user: userId,
      type: "Comment",
      content: `${postUserName} commented your post`,
      read: false,
    };
    try {
      await commentNotificationApi(NewCommentNotificationdata);
    } catch (err) {
      console.log("like functin error");
    }
    console.log(`Commented on post with ID: ${postId}`);
    // You can implement logic to open a comment modal or navigate to a comment section for the post
  };

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post">
            <div className="post-head">
              <div className="post-header">
                <div className="post-profile-pic">
                  <img src={post.author.profilePicture} alt="Profile" />
                </div>
                <div className="post-user-name">
                  <h5>
                    {post.author.firstname} {post.author.lastname}
                  </h5>
                </div>
              </div>
              <div className="post-header-icon">
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-text">{post.content}</h3>
              <div className="post-images">
                {/* Placeholder for displaying post images */}
                {post.imageSrc && <img src={post.imageSrc} alt="Post image" />}
              </div>
            </div>
            <div className="post-footer">
              <div className="likes" onClick={() => handleLike(post._id,post.author.firstname)}>
                {/* Conditional rendering of like button based on whether the user has already liked the post */}
                {post.likes.includes(userId) ? <FaHeart /> : <FaRegHeart />}
                <span className="count">{post.likes.length} Likes</span>
              </div>
              <div className="comments" onClick={() => handleComment(post._id,post.author.firstname)}>
                <FaComment />
                <span className="count">{post.comments.length} Comments</span>
              </div>
              <div className="send">
                <LuSend />
                <span className="count">Share</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Loading profile....</h2>
      )}
    </div>
  );
};

export default Post;
