import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';
import bg from '../images/img-4.jpg';
//  import {video} from "../videos/video-1.mp4";

function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${bg})`  }}>
       {/* <video src='/videos/video-1.mp4' autoPlay loop muted />  */}
      {/* rc={<video/> } type="video/ <source smp4" />  */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;