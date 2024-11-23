import React from 'react'
import './MainPage.css'
import Navbar from './Navbar'
import Story from './Story'
import PostSection from './PostSection'
import BottomNavBar from './BottomNavbar'
import ChatPage from './ChatPage'

const MainPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Story></Story>
      <PostSection></PostSection>
      <BottomNavBar></BottomNavBar>
      
    </div>
  )
}

export default MainPage
