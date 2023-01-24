import React from 'react';
import './Aboutcss.css';
// import { Button } from '@mui/material';
export const About = () => {
  return (
    <>
    <div className='About-Container'>
      <div className='About-Container-img-div'>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
    <div className='main'>
        <div className='div-1'>
            <h2>About</h2>
            <h3>MDA & UNIQUE Asssociates</h3>
            {/* <h4>Group</h4> */}
        </div>
        <div className='div-2'>
            <div className='child-div'>
                <p>Since 2020, MDA & UNIQUE Asssociates has built and remodeled thousands of homes in India. RCG designs and builds custom homes, whole home remodels, additions, outdoor living spaces, kitchens, and other areas of your home that encompass your unique needs and desires.
</p>
            </div>
        </div>
    </div>
    <div className='about-more-info-box'>
    <div className='about-more-info'>
    <div className='about-more-info-child'>
      <div className='about-more-info-child-para'>
        <h4>Let us help you with your remodel or new build!</h4>
      </div>
      <div className="about-more-info-child-button">
        <button className='btn'>contact us for more</button>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}
