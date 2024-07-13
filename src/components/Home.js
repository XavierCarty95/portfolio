import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer.js';
import Cards from './Cards.js';
import Welcome from './Welcome.js'
import './Home.css'

class Home extends Component {
    render() {
        return (
          <div className='body-main'>
            <Welcome/>
            <div className='container-header'>
            <h1 className='header'>Features Videos </h1>
            <div className='video-row'>
            <VideoPlayer className="video-item" src={`${process.env.PUBLIC_URL}/videos/checklist-more.mp4`}/>
            <VideoPlayer className="video-item" src={`${process.env.PUBLIC_URL}/videos/wwsSettings.mp4`}/>
            <VideoPlayer className="video-item" src={`${process.env.PUBLIC_URL}/videos/messages.mp4`}/>
            </div>
            <h1 className='header'> UI/UX (SwiftUI/UIKit)</h1>
            <Cards/>
            </div>
          </div>
        );
      }
}

export default Home;