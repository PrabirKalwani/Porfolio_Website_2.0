import React from 'react';
import Hero from './componets/hero';
import Nav from './componets/nav';
import './styles/style.css'
const App = () => {
  return (
      <div className='main'> 
        <Nav />
      <Hero />
    </div>

  );
}

export default App;
