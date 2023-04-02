import React from 'react';
import VideoBg from '../assets/backgroundbideo.mp4'
const Hero = () => {
  return (
    <div>
      {/* <div className='overlay'></div> */}
      <video className='video_bg' src={VideoBg} autoPlay loop muted />
      <div className='content'>
        <h1>Welcome</h1>
        <p>To my site</p>
      </div>
      </div>
  );
}

export default Hero;
