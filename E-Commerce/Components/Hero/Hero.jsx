 import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
    
   <div className="hero-left">

<h2> NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>
    </div>
<p>Collections</p>
<h1>25% off on All Products</h1>
   </div>
   <div className="hero-latest-btn">
    <a href='/homedecor'>Latest Collection </a>
   </div>
   </div>
   <div className="hero-right">
    <img src='' alt=""/>
   </div>
    </div>
  )
}

export default Hero
