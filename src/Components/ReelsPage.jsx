import React, { useState } from 'react';
import './ReelsPage.css';

const ReelsPage = () => {
  const [reels] = useState([
    { id: 1, video: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Amazing sunset! #nature' },
    { id: 2, video: 'https://www.w3schools.com/html/movie.mp4', description: 'Throwback vibes! #memories' },
    { id: 3, video: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Chasing dreams! #inspiration' },
  ]);

  return (
    <div className="reels-page">
      {reels.map((reel) => (
        <div key={reel.id} className="reel">
          <video
            src={reel.video}
            controls
            autoPlay
            loop
            className="reel-video"
          />
          <div className="reel-description">
            <p>{reel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReelsPage;
