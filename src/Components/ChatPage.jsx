import React from 'react';
import './ChatPage.css';
import Gautam from "../assets/Gautam_images.jpg";
import kalpesh from "../assets/Kalpesh1.jpg";
import Jiks from "../assets/Jiks.jpg";
import Jack_Sapprow from "../assets/Jack_Sapprow.jpg";
import Hansraj from "../assets/Hansraj.jpg";
import Nihar from "../assets/Nihar.jpg";
import Pravesh from "../assets/Pravesh.jpg";
import Aman from "../assets/Aman.jpg";


const ChatPage = ({ onClose }) => {
  const users = [
    { id: 1, name: 'Gautam Bhawsar', message: 'Hey, how are you?', profilePic: Gautam },
    { id: 2, name: 'Ritesh Chouhan', message: 'Let’s meet tomorrow.', profilePic: Jack_Sapprow },
    { id: 3, name: 'Hansraj Choudhary', message: 'Great job on the project!', profilePic: Hansraj },
    { id: 4, name: 'Jignesh Choudhary', message: 'Call me when free.', profilePic: Jiks },
    { id: 5, name: 'Kalpesh jain', message: 'Did you check the document?', profilePic: kalpesh },
    { id: 6, name: 'Nihar', message: 'Heyy Whatsapp bro?', profilePic: Nihar},
    { id: 7, name: 'Pravesh', message: 'Heyy Whatsapp bro?', profilePic: Pravesh},
    { id: 8, name: 'Aman', message: 'Heyy Whatsapp bro?', profilePic: Aman},
  ];

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>Chats</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.profilePic} alt={`${user.name}`} className="user-profile-pic" />
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="last-message">{user.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
