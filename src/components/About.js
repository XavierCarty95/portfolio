import React from "react";
import './About.css';
import heroImage from '../portfolio.png';
import profileImg from '../profile-pic.jpg';

function About() { 
  return ( 
    <div className="about">
      <div className="hero-section">
        <img className="hero-image" src={heroImage} alt="Hero" />
      </div>
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <div className="profile-bio">
          <img className="profile-img" src={profileImg} alt="Profile" />
          <p className="profile-description">
            I am a passionate software engineer with five years of experience specializing in iOS app development using both SwiftUI and UIKit. My journey in technology is complemented by a rich background in psychology, which enhances my approach to building user-centric mobile and web applications.
            <br /><br />
            Beyond my professional life, I have been deeply involved in soccer, a sport I’ve played all my life. As an ardent supporter of Chelsea FC, the game continues to be a significant part of my life. Originally from New York with a proud Jamaican heritage, I have also been influenced by my English roots through my father.
            <br /><br />
            My educational path took me to Johnson & Wales University, and I am currently advancing my knowledge at Stevens Institute of Technology. Family is incredibly important to me, and my 9-month-old child brings immense joy to my life. In my free time, I indulge in Muay Thai, boxing, Jiu-Jitsu, MMA, playing and watching soccer, and of course, coding. I am also a member of Kappa Alpha Pis Fraternity Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;