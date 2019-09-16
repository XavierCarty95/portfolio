import React from 'react';
import Navy from './Navbar';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Github from './Github';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Projects from './Projects';
import Hangman from './Hangman';
const App = () => {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Navy />
        <Switch>
          <Link to='/' component={Home} />
          <Link to='/about' component={About} />
          <Link to='/contact' component={Contact} />
          <Route to='/project' component={Projects} />
          <Route to='/hangman' component={Hangman} />
        </Switch>
      </Router>
      <Github />
      <Footer />
    </Container>
  );
};

export default App;
