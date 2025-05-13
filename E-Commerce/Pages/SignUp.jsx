import React from 'react'
import styles from './CSS/Login.css'
import { useState } from 'react';


function SignUp() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <div className='login'>
            <h2>Sign Up</h2>
            <form className="login-container" onSubmit={handleSubmit}>
                <div className="login-fields">
                    
                    <input
                        type="text"
                        placeholder='Username'
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="login-fields">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="EmailAddress"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="login-fields">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='password'
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitBtn}>
                   Continue
                </button>
                <p className="login-login">Already have an account? </p>
                <div className="login-agree">
                   <input type="checkbox" name='' id='' />
                   <p>By continuing, i agree to the terms of use & privacy policy.</p>
                   </div>
            </form>
        </div>
    );
}


export default SignUp
