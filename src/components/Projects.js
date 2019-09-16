import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import CardGroup from 'react-bootstrap/CardGroup';
// eslint-disable-next-line
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line
import Button from 'react-bootstrap/Button';
import './App.css';

export class Projects extends Component {
  render() {
    return (
      <Fragment>
        <h1> Coming Soon .... </h1>
        {/* /* <CardGroup>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title> Invisible </Card.Title>
              <Card.Text>
                This is a project built using html , and Css. Click link to view
                project.
                <a href='./invisiblecard.html'>
                  <Button className='project-btn' variant='outline-primary'>
                    Invisible Card
                  </Button>
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created By Xavier </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title> Hangman </Card.Title>
              <Card.Text>
                Created a Hangman game using C# , new to the C# languange but i
                love OOP.
                <Button className='project-btn' variant='outline-primary'>
                  Hangman C#
                </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created by Xavier </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title> Blog </Card.Title>
              <Card.Text>
                created a blog with React JSX . Used props , state , and a
                react-redux
                <Button className='project-btn' variant='outline-primary'>
                  Blog
                </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created by Xavier</small>
            </Card.Footer>
          </Card>
        </CardGroup> */}
      </Fragment>
    );
  }
}

export default Projects;
