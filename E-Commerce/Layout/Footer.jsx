import React from 'react'
import'./Footer.css'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return(
        <div className='footer'>
        <hr></hr>
         <div className="footer-logo">
         <img src='' alt="" />
         <hr></hr>
         <h4>ARTSY</h4>
         </div>
         <div>
        <a href='/contactus'>T&C</a>
         </div>
         <div className="footer-social-icon">
         <div className="footer-icons-container">
         <a href='https://mail.google.com/'><EmailIcon/></a>
         </div>
         <div className="footer-icons-container">
         <a href='https://www.instagram.com/'><InstagramIcon /></a>
         </div>
         <div className="footer-icons-container">
         <a href='https://www.facebook.com/'><FacebookIcon/></a>
         </div>
         </div>
         <div className="footer-copyright">
         <hr />
         <p>Copyright @ 2023 - All Right Reserved.</p>
       
         </div>
        </div>
    )
}

export default Footer
