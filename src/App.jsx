// import { useState } from 'react'
// import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Contact from './components/contact_us'
import About from './components/about_us'
import Predict from './components/predict'

function App() {

  return (
    <>
      
      <div className='h-screen w-full bg-zinc-900'>
        <div className='bg-zinc-800 flex justify-between p-3' id='navbar'>
          <Navbar />
        </div>
        
        <div className='flex gap-50' id='hero'>
          <Hero />
        </div>
      </div>

      <div className='h-full w-full bg-zinc-900' id='predict'>
        <Predict />
      </div>

      <div className='h-screen w-full bg-zinc-900' id='about'>
        <About />
      </div>

      <div className='h-50 w-full bg-zinc-900' id='contact'>
        <Contact />
      </div>
    </>
  )
}

export default App
