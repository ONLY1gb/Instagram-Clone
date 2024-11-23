import React from 'react';
import './PostSection.css';
import { FaHeart, FaComment, FaPaperPlane } from 'react-icons/fa';
import Gautam from "../assets/Gautam_images.jpg";
import kalpesh from "../assets/Kalpesh1.jpg";
import Jiks from "../assets/Jiks.jpg";
import Jack_Sapprow from "../assets/Jack_Sapprow.jpg";
import Abhishek from "../assets/Abhishek.jpg";
import Nikhil from "../assets/Nikhil.jpg";


  
const PostSection = () => {
  const posts = [
    {
      id: 1,
      username: 'Gautam',
      image: Gautam,
      caption: 'Enjoying the sunset!',
      likes: 120,
      comments: 45,
    },
    {
      id: 2,
      username: 'jiks_21',
      image: Jiks,
      caption: 'Nature is amazing!',
      likes: 200,
      comments: 70,
    },
    {
      id: 3,
      username: 'kalpesh',
      image: kalpesh,
      caption: 'Nature is amazing!',
      likes: 200,
      comments: 70,
    },
    {
      id: 4,
      username: 'Abhishek',
      image: Abhishek,
      caption: 'Nature is amazing!',
      likes: 200,
      comments: 70,
    },
    {
      id: 5,
      username: 'Jack_Sparrow',
      image: Jack_Sapprow,
      caption: 'Nature is amazing!',
      likes: 200,
      comments: 70,
    },
    {
      id: 6,
      username: 'Nikhil',
      image: Nikhil,
      caption: 'Nature is amazing!',
      likes: 200,
      comments: 70,
    },
  ];

  return (
    <div className="post-section">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <p className="post-username">{post.username}</p>
          </div>
          <div className="post-image">
            <img src={post.image} alt={`${post.username}'s post`} />
          </div>
          <div className="post-actions">
            <FaHeart className="icon like-icon" />
            <FaComment className="icon comment-icon" />
            <FaPaperPlane className="icon share-icon" />
          </div>
          <div className="post-info">
            <p>
              <strong>{post.likes} likes</strong>
            </p>
            <p>
              <strong>{post.username}</strong> {post.caption}
            </p>
            <p className="post-comments">View all {post.comments} comments</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
