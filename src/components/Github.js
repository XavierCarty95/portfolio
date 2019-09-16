import axios from 'axios';

import React, { Component, Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'react-bootstrap';
export class Github extends Component {
  state = {
    user: 'username',
    html_url: 'html_url',
    url: 'url',
    avatar_url: 'avatar_url'
  };

  componentDidMount() {
    const username = 'XavierCarty95';
    axios.get(`https://api.github.com/users/${username}`).then(res => {
      const users = res.data;
      console.log(users);
      this.setState({
        user: users.login,
        html_url: users.html_url,
        url: users.url,
        avatar_url: users.avatar_url
      });
    });
  }

  render() {
    const { user, html_url, url, avatar_url } = this.state;
    return (
      <Fragment>
        <Jumbotron fluid className='fluid'>
          <Container>
            <h1 className='text-center'> {user}</h1>
            <img className='text-center' src={avatar_url} alt='pic of me' />
            <p className='text-center'>
              <a href={html_url} target='_blank' rel='noopener noreferrer'>
                {' '}
                Link to GitHub{' '}
              </a>{' '}
            </p>
            <p className='text-center'>
              <a href={url}> {url}</a>{' '}
            </p>
            <q>
              <em>
                {' '}
                This section is created using th github api, I am using axios to
                fetch data
              </em>
            </q>
          </Container>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Github;
