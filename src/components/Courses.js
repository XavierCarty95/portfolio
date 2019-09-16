import React, { Fragment } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Pic from './img/cs50x.jpg';
import Pic1 from './img/webdevelop.jpeg';
import Pic2 from './img/compt.jpeg';
import Pic3 from './img/csharp.jpeg';
import Pic4 from './img/devconn.jpeg';
import Pic5 from './img/MySQL.jpeg';
import './App.css';
export default class Courses extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className='text-center courses'> Courses & Certifications </h1>
        <CardGroup className='courses'>
          <Card className='card '>
            <Card.Img variant='top' src={Pic} alt='pic of course' />
            <Card.Body>
              <Card.Title> Harvard CS-50 </Card.Title>
              <Card.Text>
                Learning Data Structues and Algorithims with Harvard CS50
                Instructor David Malan
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created By Xavier </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant='top' src={Pic1} alt='pic of course' />
            <Card.Body>
              <Card.Title> Full Stack Web Development </Card.Title>
              <Card.Text>
                Completed Full Stack Web Develooper with Angela Yu , reviewed
                Mern Stack
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created by Xavier </small>
            </Card.Footer>
          </Card>
          <Card className='card'>
            <Card.Img variant='top' src={Pic4} alt='pic of course' />
            <Card.Body>
              <Card.Title> Mern Stack wih Brad Traversy </Card.Title>
              <Card.Text>
                {' '}
                Completed a full social media for developers website with Dev
                Connector Taught By Brad Traversy
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created by Xavier</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className='card'>
            <Card.Img variant='top' src={Pic2} alt='pic of course' />
            <Card.Body>
              <Card.Title> Comp Tia A+ with Mike Meyers </Card.Title>
              <Card.Text>
                Course 1: Everything you need to pass the A+ 2019 Core 1
                (220-1001) Exam, from Mike Meyers and Total Seminars.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created By Xavier </small>
            </Card.Footer>
          </Card>
          <Card className='card'>
            <Card.Img variant='top' src={Pic3} alt='pic of course' />
            <Card.Body>
              <Card.Title> C# with Eric Wise </Card.Title>
              <Card.Text>Learning C Sharp with Eric Wise</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created By Xavier </small>
            </Card.Footer>
          </Card>
          <Card className='card'>
            <Card.Img variant='top' src={Pic5} alt='pic of course' />
            <Card.Body>
              <Card.Title> MySQL BootCamp </Card.Title>
              <Card.Text>
                Become an In-demand SQL Master by creating complex databases and
                building reports through real-world projects
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> Created By Xavier </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Fragment>
    );
  }
}
