import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import "./Home.css"

function App() {
  return (
    <Router>
      <div>
        <nav className='navBar'>
          <ul>
            <li><Link to="/" className="no-underline">Home</Link></li>
            <li><Link to="/resume" className="no-underline">Resume</Link></li>
            <li><Link to="/about" className="no-underline">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;