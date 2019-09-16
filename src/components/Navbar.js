import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navy extends Component {
  render() {
    return (
      <Navbar
        className='navbar'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
      >
        <Navbar.Brand href='/'> Xavier </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link tag={Link} href='/contact'>
              Contact
            </Nav.Link>
            <Nav.Link eventKey={2} href='/about'>
              About Me
            </Nav.Link>
            <Nav.Link eventKey={3} href='/project'>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navy;
