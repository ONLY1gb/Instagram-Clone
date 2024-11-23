import React from 'react';
import './BottomNavBar.css';
import { FaHome, FaSearch, FaPlusSquare, FaFilm, FaUser } from 'react-icons/fa';

const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-icon">
        <FaHome style={{fontSize:'30px'}}/>
        
      </div>
      <div className="nav-icon">
        <FaSearch />
        
      </div>
      <div className="nav-icon">
        <FaPlusSquare />
        
      </div>
      <div className="nav-icon">
        <FaFilm />
        
      </div>
      <div className="nav-icon">
        <FaUser />
        
      </div>
    </div>
  );
};

export default BottomNavBar;
