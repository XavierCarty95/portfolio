import React from 'react';
import './Home.css'

function VideoPlayer({ src, width = 300, height = 300 }) {
  return (
    <div className='video-item'>
      <video width={width} height={height} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;