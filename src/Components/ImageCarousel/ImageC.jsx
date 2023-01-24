import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Imagecss.css';
function ImageC() {
  return (
    <div className='imageslider'>
    {/* <br /> */}
    {/* <br />
    <br /> */}
          {/* src="https://www.jacksondesignandremodeling.com/wp-content/uploads/2018/12/JDR_Homepage_Hero_1400x700px.jpg" */}
    
    <Carousel className='slider'>
      <Carousel.Item className='item-1'>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>we create dreams</h3>
          <p>We believe in Quality and Customer Satisfaction above all else. We provide personalized service and handle each project from start to finish.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-2'>
        <img
          className="d-block w-100"
          // src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600"
          src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-houses-3-1538580263.jpg?crop=0.966xw:0.711xh;0,0.263xh&resize=980:*'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>we create dreams</h3>
          <p>We believe in Quality and Customer Satisfaction above all else. We provide personalized service and handle each project from start to finish.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-3'>
        <img
          className="d-block w-100"
          // src="https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=600"
          // src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stocker-hoesterey-montenegro-architects-1486154146.jpg?crop=1.00xw:0.744xh;0,0.0946xh&resize=980:*'
          src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/soler-architecture-and-design-1486154144.jpg?crop=1.00xw:0.754xh;0,0.0699xh&resize=980:*'
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>we create dreams</h3>
          <p>We believe in Quality and Customer Satisfaction above all else. We provide personalized service and handle each project from start to finish.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageC;