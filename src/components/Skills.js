import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'react-bootstrap';

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='text-center'>Skills </h1>
      <ListGroup className='text-center'>
        <ListGroup.Item className='skills' variant='dark'>
          {' '}
          HTML
        </ListGroup.Item>
        <ListGroup.Item className='skills' variant='light'>
          {' '}
          CSS{' '}
        </ListGroup.Item>
        <ListGroup.Item className='skills' variant='dark'>
          {' '}
          REACT{' '}
        </ListGroup.Item>
        <ListGroup.Item className='skills' variant='light'>
          {' '}
          JavaScript{' '}
        </ListGroup.Item>
        <ListGroup.Item className='skills' variant='dark'>
          {' '}
          MERN Stack{' '}
        </ListGroup.Item>
        <ListGroup.Item className='skills' variant='light'>
          {' '}
          Python{' '}
        </ListGroup.Item>
        <ListGroup.Item className='skills' variant='dark'>
          {' '}
          Github
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Skills;
