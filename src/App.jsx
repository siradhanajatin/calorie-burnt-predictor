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
      
      <div className='bg-zinc-800 flex justify-between p-3' id='navbar'>
        <Navbar />
      </div>
      
      <div id='hero'>
        <Hero />
      </div>

      <div id='predict'>
        <Predict />
      </div>

      <div id='about'>
        <About />
      </div>

      <div id='contact'>
        <Contact />
      </div>
    </>
  )
}

export default App
