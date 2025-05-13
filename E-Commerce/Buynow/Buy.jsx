import React from "react";
import Drop from '../Buynow/Drop'
import './Buy.css'
import { Link } from "react-router-dom";
const Buy = () => {
    return(
        <div className='loginsignup'>
         <div className="loginsignup-container">
         <h1>Check Out</h1>
         <div className="loginsignup-fields">
         <input type="text" placeholder='Your Name' />
         <input type="email" placeholder='Email Address' />
         <input type="text" placeholder='Residential Address' />
         <Drop/>
         </div>
         <Link to='/success'><button>Buy</button></Link>
      
         <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
         </div>
         </div>
        </div>
    )
}

export default Buy