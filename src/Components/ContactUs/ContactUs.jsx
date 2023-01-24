import { TextField } from '@mui/material';
import React from 'react';
import './ContactUs.css';
export const ContactUs = () => {
  return (
    <div>
         <div className='Contact-Container'>
      <div className='Contact-Container-img-div'>
        {/* <img src="" alt="" /> */}
      </div>
      </div>
        <div className='contact-main-head'>
        <div className='contact-main-head-over-div '>
        <div className='contact-main-head-over-div-img'>
            <div className='contact-main-head-over-div-img-blinking-text animate-charcter'>get in tounch with us</div>
        </div>
        {/* <div className='contact-main-head-over-div-flex'>
        <div className='contact-main-head-over-div-message'>
            <a href="#message">Message Us</a>
        </div>
        <div className='contact-main-head-over-div-call'>
        <a href="tel:1234567890">call Us</a>
        </div>
        </div> */}
        </div>
        <div className='contact-main-head-img'>
            <div>
            <h3>Thank you for your interest in Rüya Construction Group ! The RCG team is available in person for a free design consultation. Call us at 858.348.5254 to schedule a private tour or free design consultation or fill out the form below.

</h3>
</div>
            {/* <img src="https://www.zricks.com/img/UpdatesBlog/30de4052-3001-49bd-89a6-6d1c81ff8f21Weekend%20Homes%20or%20Vacation%20Homes-compressed.jpg" alt="" />
        */}
        
        <div className='contact-main-head-over-div-flex'>
        <div className='contact-main-head-over-div-message'>
            <a href="#message">Message Us</a>
        </div>
        <div className='contact-main-head-over-div-call'>
        <a href="tel:1234567890">call Us</a>
        </div>
        </div>
        </div>
        
        </div>
        <div id='message' className='contact-main-content'>
            <div className='contact-main-content-div-1'>
                <h3>Contact Us</h3>
                <h6>If you’d like to learn more about how we can <br/>help make your dream home a reality. <br/> <br/>We can’t wait to hear from you!</h6>
            </div>
            <div className='contact-main-content-div-2'>
                <form action="" className='contact-main-content-div-2-form'>
                    <div className='contact-main-content-div-2-form-name'>
                    <h6>Your Name <span className='contact-main-content-div-2-form-star'>*</span></h6>
                    {/* <input type="text" /> */}
                    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Enter Your Name"
        />
                    </div>
                    <div className='contact-main-content-div-2-form-email'>
                    <h6>Your Email <span className='contact-main-content-div-2-form-star'>*</span></h6>
                    {/* <input type="email" name="" id="" /> */}
                    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Enter Your Email"
        />
                    </div>
                    <div className='contact-main-content-div-2-form-phone'>
                    <h6>Phone</h6>
                    {/* <input type="tel" name="" id=""  /> */}
                    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Enter Your Mobile Number"
        />
                    </div>
                    <div className='contact-main-content-div-2-form-subject'>
                    <h6>Subject</h6>
                    {/* <input type="text" /> */}
                    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
        />
                    </div>
                    <div className='contact-main-content-div-2-form-message'>
                    <h6>Your Message</h6>
                    {/* <TextField type="text" /> */}
                    <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
                    </div>
                    <div className='contact-main-content-div-2-form-submit'>
                    <button>submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
