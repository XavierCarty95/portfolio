import React, { Component } from "react";
import profileImg from '../profile-pic.jpg'
import './Welcome.css'

class Welcome extends Component { 
    render() { 
        return ( 
            <div className="container">
                <div className="welcome"> 
                    <img src={profileImg} alt="family"></img>
                    <p> Hello, my name is Xavier, though some call me X. I am a software engineer with five years of experience, currently working at The Knot Worldwide as an iOS developer.
                    <br></br>
                    <br></br>
                    Below are some features that I have built and are currently live. As I continue to work on new and exciting features, I will post updates when they become available on the App Store.
                    <br></br>
                    <br></br>
                    I am proficient in Swift, SwiftUI/UIKit, GraphQL, JavaScript, Python, Java, Node.js, MongoDB, Express, and many other coding languages and frameworks. I am currently pursuing a Master’s degree in Computer Science at Stevens Institute of Technology.
                    </p>
                </div>
            </div>
        )
    }
}

export default Welcome