import React from 'react';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Scroll from '../components/scroll'; 

import '../styles/style.css';

const Home = () => {
  return (
    <div className='main'>
      <Nav />
      <Hero />
      <Scroll /> 
    </div>
  );
};

export default Home;
