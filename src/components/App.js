import React from 'react';
import Navy from './Navbar';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Github from './Github';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Projects from './Projects';
import Hangman from './Hangman';
const App = () => {
  return (
    <Container>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navy />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/project' component={Projects} />
          <Route exact path='/hangman' component={Hangman} />
        </Switch>
      </HashRouter>
      <Github />
      <Footer />
    </Container>
  );
};

export default App;
