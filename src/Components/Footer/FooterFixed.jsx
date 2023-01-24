import React from 'react';
import './FooterFixed.css';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
// import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const FooterFixed = () => {
  return (
    <div className='footer-fixed'>
        {/* <div className='footer-fixed-newsletter'>
          <div className='footer-fixed-newsletter-child-div'>
          <h2>Sign up for our newsletter</h2>
          <form>
                    <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                    <input type="submit" name="submit" value="Let's Start" id="" placeholder=""/>
        </form></div>
          
       
        </div>
        <div className='footer-fixed-connect-social'>
            <h3>Get connected with us on social networks: <span className='footer-fixed-connect-social-icons'>
              <a href="https://twitter.com/" target="_blank"><TwitterIcon/></a>
              <a href="https://www.facebook.com/" target="_blank" className='insta'><InstagramIcon/></a>
              <a href="https://www.instagram.com" target="_blank"><FacebookIcon/></a>
              <a href="https://www.google.com/" target="_blank"><GoogleIcon/></a>
              <a href="https://api.whatsapp.com/send?phone=15551234567" target="_blank"><WhatsAppIcon/></a>
              </span></h3>
        </div> */}
       <div className='footer-fixed-flex'>
       <div className='footer-fixed-flex-div-1'>
       
        <div className='footer-fixed-flex-div-1-chid-1'>
        <h3> MDA & UNIQUE Asssociates</h3>
        <p className='footer-fixed-flex-div-1-chid-1-para'>At MKD & UNIQUE Asssociates, our team of exceptional professionals has always <br/> been our most important asset. 
        </p>
        </div>
        <div className='footer-fixed-flex-div-1-chid-2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.267269033208!2d77.32027311394044!3d19.183525387026314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7f86e23c7e5%3A0x1b4e7f8b00b0f0b8!2sMDA%20%26%20UNIQUE%20Associates!5e0!3m2!1sen!2sin!4v1674537204793!5m2!1sen!2sin" width="500" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       </div>
       <div className='footer-fixed-flex-div-2'>
        <ul>
          <li><h3>Useful Links</h3></li>
          <li><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
          <li><Link to='/services' style={{ textDecoration: 'none' }}>Services</Link></li>
          <li><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></li>
        </ul>
       </div>
       <div className='footer-fixed-flex-div-3'>
        <ul>
            <li><h3>Contact</h3></li>
            <li>
            {/* <LocationOnOutlinedIcon></LocationOnOutlinedIcon> */}
            <a href="https://www.google.com/maps/@19.136649,77.2979777,15z" target='_blank'><LocationOnIcon></LocationOnIcon> New York, NY 10012, US</a>
            </li>
            <li><a href="mailto:info@example.com"><EmailIcon></EmailIcon>info@example.com</a></li>
            <li><a href="tel:+6031112298"><CallIcon/>6031112298</a></li>
       </ul>
       </div>
       </div>
       <div className='footer-fixed-copyright'>
        <h1>© 2021 Copyright: MKD & UNIQUE Asssociates</h1>
       </div>
    </div>
  )
}
