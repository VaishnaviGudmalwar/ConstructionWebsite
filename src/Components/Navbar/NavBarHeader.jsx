import React from 'react';
import './Header.css';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
const NavBarHeader=() =>{
  return (
    <div>
        <nav className='clear'>
          <div className='clear-logo-div'>
            {/* <h2> */}
              <img id="img" src="construction website logo.jpeg" alt="" />
            {/* <span id='name'> <span id='intial'>R</span>üya</span> construction  <span id='float'>group</span> */}
            {/* </h2> */}
            </div>
            <div  className='clear-anchors-div'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reviews">Testimonials</Link>
            <Link to="/contact">Contact Us</Link>
            {/* <a href="tel:123567890"><LocalPhoneIcon/>6789456723</a> */}
            </div>
        </nav>
    </div>
  )
}

export default NavBarHeader;