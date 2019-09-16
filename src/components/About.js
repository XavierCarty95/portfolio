import React from 'react';

import Pic from './img/pic.jpg';
const About = () => {
  return (
    <div className='aboutme'>
      <h1 className='header text-center'> About Me</h1>
      <div className='bio'>
        <img alt='pic of me' src={Pic} />
        <p>
          {' '}
          Hello my name is Xavier from Mount Vernon , NY. My story is
          interesting i went to Johnson & Wales University and played Soccer for
          4 years and received my Bachelors in Psychology. Then After i
          graduated in 2017 i enrolled in Master's program and received my
          Masters in Counseling Psych I joined Kappa Alpha Psi Fraternity Inc
          Fall 2017 After gaining employment in mental health i realize that
          this is not my end goal and i have a passion for technology. Now I am
          about 1 year in at{' '}
          <a
            href='http://careerdevs.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <em> Career Devs University. </em>{' '}
          </a>{' '}
          Career Devs has taught me how to solve complex problems by breaking
          problems down into simple tasks. Now I have a burning passion for
          Technology. It brings me great pleasure knowing that I am able to
          design this site without any help. Reactjs is one of my favorite
          Javascript frameworks I am now learning how to build a web scraper
          with C# and I love it.
        </p>
      </div>
    </div>
  );
};

export default About;
