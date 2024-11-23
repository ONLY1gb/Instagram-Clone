import React from 'react'
import './Story.css'
import Gautam from "../assets/Gautam_images.jpg";
import kalpesh from "../assets/Kalpesh1.jpg";
import Jiks from "../assets/Jiks.jpg";
import Jack_Sapprow from "../assets/Jack_Sapprow.jpg";
import Viplove from "../assets/Viplove.jpg";
import Nikhil from "../assets/Nikhil.jpg";
import Hansraj from "../assets/Hansraj.jpg";
import Pankaj from "../assets/Pankaj.jpg";
import Shubham from "../assets/Shubham.jpg";
import Nihar from "../assets/Nihar.jpg";
import Pravesh from "../assets/Pravesh.jpg";
import Aman from "../assets/Aman.jpg";

const Story = () => {

    const stories = [
        { id: 1, username: 'Gautam', image: Gautam },
        { id: 2, username: 'Ritesh', image: Jack_Sapprow},
        { id: 3, username: 'Hansraj', image: Hansraj },
        { id: 4, username: 'Jignesh', image:  Jiks},
        { id: 5, username: 'Kalpesh', image:  kalpesh},
        { id: 6, username: 'Pankaj', image: Pankaj},
        { id: 7, username: 'Viplove', image: Viplove},
        { id: 8, username: 'Shubham', image: Shubham},
        { id: 9, username: 'Nikhil', image: Nikhil},
        { id: 11, username: 'Nihar', image: Nihar},
        { id: 12, username: 'Pravesh', image: Pravesh},
        { id: 13, username: 'Aman', image: Aman},
    ];
    

  return (
    <div className="story-section">
    <div className="story-container">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.image} alt={`${story.username} story`} />
          <p>{story.username}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Story
