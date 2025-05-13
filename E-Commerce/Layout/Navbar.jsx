import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Sidebar from './Sidebar'
import w1 from './Artsylogo/logo.jpeg';
import q1 from './Artsylogo/hii.jpeg';
const Navbar = () => {
  const [nav,setnav]=useState("shop")

  return (
 <div>  
  <div className='ab'>  
  <center>
    <ul className='nav-menu' style={{}} >
    
     
     <li><img src={q1} style={{height:'10px'}}/></li>
    <li onClick={()=>{setnav("signin")}}><Link style={{textDecoration:'none'}} to='/signin'>Login/Register</Link>{nav==="signin"?<hr/>:<></>}</li>
    </ul></center>
  </div> 
 
  </div>
  )
}

export default Navbar

