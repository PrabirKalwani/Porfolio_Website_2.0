import React from 'react'
import Hero from '../components/hero'
import Nav from '../components/nav'
import '../styles/style.css'
const Home = () => {
  return (
    <div className='main'>
      <Nav />
      <Hero />
    </div>
  )
}

export default Home