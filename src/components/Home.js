import React, { Component } from "react";
import VideoPlayer from "./VideoPlayer.js";
import Cards from "./Cards.js";
import Welcome from "./Welcome.js";
import "./Home.css";

class Home extends Component {
  render() {
    const videoSources = [
      `${process.env.PUBLIC_URL}/videos/checklist-more.mp4`,
      `${process.env.PUBLIC_URL}/videos/wwsSettings.mp4`,
      `${process.env.PUBLIC_URL}/videos/messages.mp4`,
      `${process.env.PUBLIC_URL}/videos/dsw.mp4`
    ];

    return (
      <div className="body-main">
        <Welcome />
        <div className="container-header">
          <h1 className="header">Features Videos </h1>
          <div className="video-row">
            {videoSources.map((src, index) => (
              <VideoPlayer key={index} className="video-item" src={src} />
            ))}
          </div>
          <h1 className="header"> UI/UX (SwiftUI/UIKit)</h1>
          <Cards />
        </div>
      </div>
    );
  }
}

export default Home;
