import React from 'react';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Scroll from '../components/scroll'; 
import Projects from '../components/projects';
import '../styles/style.css'; 
import CardOp from '../components/CardOp';

const Home = () => {
  return (
    <div className='main'>
      <Nav />
      <Hero />
      <Scroll /> 
      <Projects />
       <CardOp />
    </div>
  );
};

export default Home;
