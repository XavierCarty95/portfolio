import React, { Component } from 'react';
import Welcome from './Welcome';
import VideoPlayer from './VideoPlayer';
import Cards from './Cards';
import "./Home.css"

class Home extends Component {
  render() {
    const videoSources = [
      `${process.env.PUBLIC_URL}/videos/budgeter.mp4`,
      `${process.env.PUBLIC_URL}/videos/checklist-more.mp4`,
      `${process.env.PUBLIC_URL}/videos/dashboard.mp4`,
      `${process.env.PUBLIC_URL}/videos/wwsSettings.mp4`,
      `${process.env.PUBLIC_URL}/videos/preLogin.mp4`,
      `${process.env.PUBLIC_URL}/videos/messages.mp4`,
      `${process.env.PUBLIC_URL}/videos/dsw.mp4`
    ];

    const titles = [ 
        "Budgeter Feature",
        "Checklist Feature",
        "Dashboard Feature",
        "WWS Settings Feature",
        "Pre-Login Screen",
        "Guest Messaging",
        "DSW"
    ]

    return (
      <div className="body-main">
        <Welcome />
        <div className="container-header">
          <h1 className="header">Features Videos</h1>
          <div className="video-row">
            {videoSources.map((src, index) => {
              let title = titles[index]
              
              return (
                <div className="video-item" key={index}>
                  {title && <h3 className="video-title">{title}</h3>}
                  <VideoPlayer src={src} />
                </div>
              );
            })}
          </div>
          <h1 className="header">UI/UX (SwiftUI/UIKit)</h1>
          <Cards />
        </div>
      </div>
    );
  }
}

export default Home;