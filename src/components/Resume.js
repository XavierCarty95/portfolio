import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <div className="header">
        <h1>Xavier Carty</h1>
        <p>Brooklyn, New York | 914-319-9297 | <a href="mailto:xaviercarty@gmail.com">xaviercarty@gmail.com</a> | <a href="YOUR_PORTFOLIO_URL">Portfolio</a> | <a href="https://www.linkedin.com/in/xaviercarty/">LinkedIn</a></p>
      </div>

      <div className="summary">
        <p>Software Engineer with five years of experience developing innovative features for iOS applications. Proficient in Swift, utilizing UIKit and SwiftUI for front-end development. As a developer on the Planning and Content team, I leverage the Agile methodology to collaborate closely with Design, QA, and Product Managers (PMs), ensuring the delivery of high-quality features that enhance user experience.</p>
      </div>

      <div className="experience">
        <h2>EXPERIENCE</h2>

        <div className="job">
          <h3>The Knot Worldwide, 02/2022 - Current — IOS Developer</h3>
          <ul>
            <li>
              <strong>New Checklist Feature:</strong> Developed a checklist feature to help users track important to-dos for their upcoming wedding. Implemented search functionality for finding specific tasks, selecting optional tasks, categorizing them, and updating or deleting tasks. Also added vendor carousels on each page.
            </li>
            <li>
              <strong>New Budgeter Tool:</strong> Developed a budget tracking tool that includes a pie chart to visualize spending across different categories (e.g., venues, photographers, DJs) based on location. Built a custom budget-saving feature that allows users to search for vendors within their saved budget based on location.
            </li>
            <li>
              <strong>Guest Messaging Feature:</strong> Designed and implemented a custom guest messaging system for couples, featuring advanced filtering options (e.g., search by last name, first name, RSVP status). Developed an import functionality for users to add guests from their contacts or enter them manually. Added vendor carousels recommendations for categories on the page.
            </li>
            <li>
              <strong>Wedding Website Feature:</strong> Created a new Wedding Website Settings (WWS) screen using UIKit, enabling users to customize their wedding website settings, including date formats, wedding location, and partner names.
            </li>
            <li>
              <strong>Pre-Login Screen:</strong> Developed the Pre-Login Screen, allowing users to swipe through different app features before logging in or signing up.
            </li>
            <li>
              <strong>Non-Feature Work:</strong> Bug fixes and optimizations, contributing to achieving a 99% crash-free rate for users. Optimized code by modularizing the app and creating reusable views. Writing Unit Tests immediately after feature development. Using Instruments to track down memory leaks.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Designer Brands INC, 04/2021 - 02/2022 - IOS Developer</h3>
          <ul>
            <li>
              <strong>Feature Development:</strong> Set up networking, models, views, and unit tests for main features. Built a comprehensive search system with a rich user-friendly UI Layout.
            </li>
            <li>
              <strong>UICompositional Layout:</strong> Built a preview search with complex UI layouts.
            </li>
            <li>
              <strong>Loyalty Programs:</strong> Developed Reward Loyalty Screens for the rewards program.
            </li>
            <li>
              <strong>SwiftUI Widgets:</strong> Introduced the brand directory widget to display different brands of sneakers on the user's dashboard.
            </li>
            <li>
              <strong>Category Pages: </strong> Developed new brand pages using tableviews, making it easy for users to find specific brands.
            </li>
            <li>
              <strong>Responsive Design:</strong> Utilized UIKit to deliver pixel-perfect quality for users.
            </li>
          </ul>
        </div>
      </div>

      <div className="education">
        <h2>EDUCATION</h2>
        <ul>
          <li>Stevens Institute Of Technology - Masters, Computer Science, Hoboken, NJ</li>
          <li>Johnson & Wales University - MS & BS, Counseling Psychology, Providence, RI</li>
          <li>Flatiron School - FullStack Software Engineering Bootcamp, New York, NY</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;