// import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Contact from './components/contact_us'
import About from './components/about_us'
import Predict from './components/predict'

function App() {

  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      
      <div className='hero'>
        <Hero />
      </div>

      <div className='predict'>
        <Predict />
      </div>

      <div className='about'>
        <About />
      </div>

      <div className='contact'>
        <Contact />
      </div>
    </>
  )
}

export default App
