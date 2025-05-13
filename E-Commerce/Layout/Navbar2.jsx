import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
    const [menu,setMenu]=useState("shop")
   
  return (
    <div className='Navbar2'>
    <center>
    <ul className='nav-menu' style={{justifyContent:'center' }} >
    <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("homedecor")}}><Link style={{textDecoration:'none'}} to='/homedecor'>HomeDecor</Link>{menu==="homedecor"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("artwork")}}><Link style={{textDecoration:'none'}} to='artwork'>Artwork</Link>{menu==="artwork"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration:'none'}} to='accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
    </ul></center>
    
    </div>
  )
}

export default Navbar2
