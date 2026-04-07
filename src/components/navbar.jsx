import React from 'react'

const navbar = () => {
  return (
    <>
        <div className='nav_logo'>
            <a href="#hero"><img src="https://plus.unsplash.com/premium_photo-1731222300629-0701d3160e1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" /></a>
            <h2><a href="#hero">Calorie Burnt Predictor</a></h2>
        </div>
        <div>
            <ul className='nav_items'>
                <li><a href="#predict">Predict</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    </>
  )
}

export default navbar