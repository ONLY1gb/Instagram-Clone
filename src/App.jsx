import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginPage />} />
        {/* Route for Main Page */}
        <Route path="/main" element={<MainPage />} />
        {/* Route for Chat Page */}
        
        
      </Routes>
    </Router>
  );
};

export default App;
