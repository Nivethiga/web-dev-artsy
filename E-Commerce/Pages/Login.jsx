import React from "react";
import './CSS/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const handleSubmit=()=>{
        alert('Login successfull');
    }
    return(
        <div className='login'>
        <form onSubmit={handleSubmit}>
         <div className="login-container">
         <button><h1>Log in</h1></button>
         <div className="login-fields">
         <input type='email' placeholder='Email Address' required/>
         <input type='password' placeholder='Password' required />
         </div>
         <button type='submit'><Link to='/'>Login</Link></button>
         <p className="login-login">Dont have an account? <span><Link to='/signin'>SignUp</Link></span></p>
    
         </div>
         </form>
        </div>
    )
}

export default Login