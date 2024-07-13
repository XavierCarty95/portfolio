import React from 'react';
import './Resume.css'

function Resume() {
  return (
    <div className="resume">
      <h1>Xavier Carty</h1>
      <p>
        <strong>Contact:</strong> 914-319-9297 | 
        <a className href="mailto:xaviercarty@gmail.com"> xaviercarty@gmail.com </a> | 
        <a className href="https://www.linkedin.com/in/xaviercarty/"> LinkedIn </a>
      </p>

      <h2>Skills</h2>
      <p>
        IOS Developer with over three years of experience developing innovative and user-centric mobile applications. Proficient in Swift, Java, Python, JavaScript, and various frameworks such as SwiftUI, UIKit, GraphQL, Node.js, and React Native. Skilled in utilizing tools like Git, Figma, BitRise, Azure DevOps, SnapKit, Combine, and RxSwift. Experienced in following Agile development methodologies, MVVM architecture, and CI/CD practices. Currently pursuing a Master’s degree in Computer Science at Stevens Institute of Technology.
      </p>
      
      <h2>Experience</h2>

      <h3>The Knot Worldwide - IOS Developer</h3>
      <p>02/2022 - Current</p>
      <ul>
        <li>New Checklist Experience: Utilized async/await for backend network calls, increasing efficiency, with SwiftUI for the frontend for users to check current tasks, add tasks, and update and delete tasks. Built a search screen in SwiftUI for users to add optional tasks.</li>
        <li>Revenue Enhancement: Increased company's revenue with HVA's adding vendors to the home screen.</li>
        <li>UI Improvements: Built carousel views, deep-linked to articles, and revamped the sign-up/login screen with SwiftUI and UIKit.</li>
        <li>Guest Messaging Screen: Developed within 3 months, including filtering features where users can find guests by last name, first name, RSVP status, etc.</li>
        <li>Wedding Website: Developed a new WWS settings screen in UIKit where users can change their Wedding Website Settings such as date formats, wedding location, and partner names. Utilizing Graph QL fetching WWS info from the backend.</li>
        <li>Bug Fixes: Addressed issues in views, models, and service layers helping maintain a 99% crash-free rate.</li>
        <li>Programmatic Views: Replaced Storyboards, and implemented views programmatically in UIKit.</li>
        <li>Testing: Implemented XCTest for testing publishers and business logic aiming for 100% coverage.</li>
      </ul>

      <h3>Designer Brands INC - IOS Developer</h3>
      <p>04/2021 - 02/2022</p>
      <ul>
        <li>Feature Development: Set up networking, models, views, and unit tests for main features. Built a comprehensive search system with a rich user friendly UI Layout.</li>
        <li>UICompositional Layout: Built a preview search with complex UI layouts.</li>
        <li>Loyalty Programs: Developed Reward Loyalty Screens for the rewards program.</li>
        <li>SwiftUI Widgets: Introduced the brand directory widget to display different brands of sneakers on the user's dashboard.</li>
        <li>Category Pages: Developed new brand pages using tableviews, making it easy for users to find specific brands.</li>
        <li>Responsive Design: Utilized UIKit to deliver pixel-perfect quality for users.</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>Stevens Institute Of Technology - Masters, Computer Science, Hoboken, NJ</li>
        <li>Flatiron School - FullStack Software Engineering Bootcamp, New York, NY</li>
        <li>Johnson & Wales University - Masters, Counseling Psychology, Providence, RI</li>
        <li>Johnson & Wales University - Bachelors, Counseling Psychology, Providence, RI</li>
      </ul>
    </div>

  );
}

export default Resume;