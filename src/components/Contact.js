import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        textAlign: 'center'
      }}
    >
      <Card
        style={{
          width: '14rem',
          marginTop: '10px',
          textAlign: 'center',
          fontSize: 'fit-to-height'
        }}
      >
        <Card.Body>
          <Card.Title> Email </Card.Title>
          <Card.Text> xaviercarty@gmail.com </Card.Text>
          <Card.Text> Phone : 914-319-9297 </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: '14rem',
          marginTop: '10px',

          fontSize: 'fit-to-height',
          padding: 'auto'
        }}
      >
        <Card.Body>
          <Card.Title> Twitter </Card.Title>
          <Card.Text style={{ fontSize: 'fit-to-height' }}>
            Follow Me On Twitter
          </Card.Text>
          <a href='https://twitter.com/Xcodes95'>
            {' '}
            <Button variant='primary'> Twitter </Button>{' '}
          </a>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: '14rem',
          marginTop: '10px',
          padding: 'auto',
          fontSize: 'fit-to-height'
        }}
      >
        <Card.Body>
          <Card.Title> @xavier </Card.Title>
          <Card.Text style={{ fontSize: 'fit-to-height' }}>
            Follow My Instagram{' '}
          </Card.Text>
          <a
            href='https://www.instagram.com/xavier_sc/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Button variant='primary'> Instagram </Button>
          </a>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: '15rem',
          marginTop: '10px',
          padding: 'auto',
          fontSize: 'fit-to-height'
        }}
      >
        <Card.Body>
          <Card.Title> Linkedn </Card.Title>
          <Card.Text style={{ fontSize: 'fit-to-height' }}>
            Follow Me On Linkedn
          </Card.Text>
          <a
            href='https://www.linkedin.com/in/xaviercarty/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Button variant='primary'> Linkedn </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
