import React, { useState } from 'react';
import './Navbar.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import ChatPage from './ChatPage';


const Navbar = () => {
  const [showChat, setShowChat] = useState(false);

  const handleMessageIconClick = () => {
    setShowChat(true); // Show the chat list
  };

  const handleCloseChat = () => {
    setShowChat(false); // Close the chat list
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex justify-content-center align-items-center">
          <a
            className="navbar-brand"
            href="#"
            style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '185px' }}
          >
            Instagram
          </a>
          <IoMdHeartEmpty
            style={{ fontSize: "2.3rem", marginRight: '20px', cursor: 'pointer' }}
          />
          <FaFacebookMessenger
            style={{ fontSize: "2.3rem", cursor: 'pointer' }}
            onClick={handleMessageIconClick}
          />
        </div>
      </nav>
      {/* Show ChatPage when the state is true */}
      {showChat && <ChatPage onClose={handleCloseChat}/>}
    </div>
  );
};

export default Navbar;
