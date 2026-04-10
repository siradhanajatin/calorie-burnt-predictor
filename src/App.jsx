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
      
      <div className='bg-[url(https://images.unsplash.com/photo-1602405385186-440222576763?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full bg-zinc-900'>
        <div className='bg-zinc-800 flex justify-between p-3' id='navbar'>
          <Navbar />
        </div>
        
        <div className='flex gap-40'>
          <Hero />
        </div>
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
