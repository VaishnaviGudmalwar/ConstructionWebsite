import React from 'react';
import './Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
import Avatar from '@mui/material/Avatar';
import Carousel from 'react-bootstrap/Carousel';
// import CloseIcon from '@mui/icons-material/Close';
// import Person3Icon from '@mui/icons-material/Person3';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Home() {
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };
  const services=[{
    "id": 1,
    "title": "General Contracting",
    "description": "From remodeling to building a new home from the ground up,MKD & UNIQUE Asssociates is passionate about creating a rewarding construction experience for our clients, our designers and trade partners, and our team.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-pljiuLxi6wgROyTLNoTvxLAtuWq1nikKQ&usqp=CAU",
    },{
         "id": 2,
"title": "Commercial Construction",
"description":"Whether you need to renovate a restaurant or build a new, high-end spa,MKD & UNIQUE Asssociates ’s quality workmanship makes the planning and construction process simple and easy ⁠— resolving in a practical and attractive commercial space.",
"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-pljiuLxi6wgROyTLNoTvxLAtuWq1nikKQ&usqp=CAU"
},{
     "id": 3,
"title": "Custom Home Building",
"description":"The team atMKD & UNIQUE Asssociates  possess a powerful understanding of the design process, and the creativity to synthesize it with construction planning.",
"image":"https://images.adsttc.com/media/images/6077/43aa/ebb5/fc01/6543/b86b/newsletter/fi-img-1234.jpg?1618428850"
},{
     "id": 4,
"title": "Kitchen Remodeling",
"description":"Remodeling the kitchen is a great way to give a home a facelift. Working within the client’s budget,MKD & UNIQUE Asssociates  provides the best service and return on investment.",
"image":"https://media.designcafe.com/wp-content/uploads/2020/06/23130933/traditional-indian-kitchen-design.jpg"
},{
     "id": 5,
"title": "Bathroom Remodeling",
"description":"Rüya  can transform any bathroom into a desirable retreat ⁠— bringing the vision of the homeowner to life by redesigning and remodeling their old bathrooms and transforming them into a dream space.",
"image":"https://i.pinimg.com/550x/e2/6a/e4/e26ae40fa6a30a61d4c8242b69ac6401.jpg"
},{
     "id": 6,
"title": "Room Additions",
"description":"Adding additional rooms is an important job and is best left to an experienced room addition contractor.MKD & UNIQUE Asssociates  provides renditions of the general and specific areas of the home to present the best plan of action for the new addition.",
"image":"http://www.theeasternhotel.com/uploads/gallery/NSP_1733a.jpg"
}
]
const HomeServices=[{
  "id": 1,
  "title": "General Contracting",
  "description": "From remodeling to building a new home from the ground up,MKD & UNIQUE Asssociates  is passionate about creating a rewarding construction experience for our clients, our designers and trade partners, and our team.",
  "image": "https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/GENERAL-CONTRACTING_ICON_JOELCO-1.png",
  },{
       "id": 2,
"title": "Commercial Construction",
"description":"Whether you need to renovate a restaurant or build a new, high-end spa,MKD & UNIQUE Asssociates ’s quality workmanship makes the planning and construction process simple and easy ⁠— resolving in a practical and attractive commercial space.",
"image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/COMMERCIAL-CONSTRUCTION_ICON_JOELCO2.png"
},{
   "id": 3,
"title": "Custom Home Building",
"description":"The team atMKD & UNIQUE Asssociates  possess a powerful understanding of the design process, and the creativity to synthesize it with construction planning.",
"image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/CUSTOM-HOME-BUILDING_ICON_JOELCO-1.png"
},{
   "id": 4,
"title": "Kitchen Remodeling",
"description":"Remodeling the kitchen is a great way to give a home a facelift. Working within the client’s budget,MKD & UNIQUE Asssociates  provides the best service and return on investment.",
"image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/BATHROOM-REMODELING_ICON_JOELCO-1.png"
},{
   "id": 5,
"title": "Bathroom Remodeling",
"description":"Rüya  can transform any bathroom into a desirable retreat ⁠— bringing the vision of the homeowner to life by redesigning and remodeling their old bathrooms and transforming them into a dream space.",
"image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/05/BATHROOM-REMODELING_ICON_JOELCO-rev.png"
},{
   "id": 6,
"title": "Room Additions",
"description":"Adding additional rooms is an important job and is best left to an experienced room addition contractor.MKD & UNIQUE Asssociates  provides renditions of the general and specific areas of the home to present the best plan of action for the new addition.",
"image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/ROOM-ADDITIONS_ICON_JOELCO2.png"
}
]
  return (

    <div>
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
        <div className='Home-main'>
        <div className='Home-div-1'>
        <h4>About</h4>
            <h3>Us</h3>
        </div>
        <div className='Home-div-2'>
            <div className='Home-child-div'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias autem non, nesciunt laboriosam consequatur aut minus omnis perferendis! Architecto quod corporis tenetur porro impedit alias, odio veniam ipsum necessitatibus totam ducimus esse voluptatum officiis aspernatur inventore deleniti veritatis earum distinctio optio officia! Facere illum a perferendis delectus rem quia. Fugit sit impedit rem aut ab quam repr.</p>
            </div>
        </div>
    </div>
    <div className='Home-about-more-info-box'>
    <div className='Home-about-more-info'>
    <div className='Home-about-more-info-child'>
      <div className='Home-about-more-info-child-para'>
        <h4>Let us help you with your remodel or new build!</h4>
      </div>
      <div className="Home-about-more-info-child-button">
        <button className='Home-btn'>contact us for more</button>
      </div>
      </div>
    </div>
    </div>
    <div className='Home-services-main'>
       <div className='Home-services-div-1'>
           <h4>Our</h4>
           <h3>services</h3>
       </div>
       <div className='Home-services-div-2'>
           <div className='Home-services-child-div'>
               <p>Our unified team of architects, designers, and construction professionals brings a thoughtful approach to your project as a whole, and to all the details that make your home feel uniquely yours. Each project we undertake starts with you – what are your needs, desires, and dreams for your home? Let’s explore how to make your home more livable and beautiful today.</p>
           </div>
       </div>
   </div>
   {/* <div className='Home-card-services'>
        {
            HomeServices.map((item,index)=>{
                return(
                    <div className='Home-S-card-Item' key={index}>
                        <div className='Home-S-card-Item-img'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='Home-S-card-Item-desc'>
                            <h1>{item.title}</h1>
                            <h6>{item.description}</h6>
                        </div>
                    </div>
                ) 
            })
        }
   </div> */}
    <div className='Our-Projects'>
        <div className='Our-Projects-heading'>
            <div className='Our-Projects-heading-child'><h3>Our Projects</h3></div>
        </div>
        <div className='Our-Projects-photos-container'>
            <div className='Our-Projects-photos-container-flex'>
                {
                    services.map((item,index)=>{
                    return    <div key={index} className='Our-Projects-photos-container-flex-main'>
                            <div className='Our-Projects-photos-container-flex-main-div-1'>
                            <img src={item.image} alt="" />
                            </div>
                            <div className='Our-Projects-photos-container-flex-main-div-2'><h6>{item.title}</h6></div>
                        </div>
                    })
                }
            </div>
        </div>

    </div>
    <section class="Home-testimonials">
        <h1>What Our Client Says</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique.</p>
        <div class="Home-testimonials-row">
            <div class="Home-testimonials-col">
                <img src="https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?b=1&s=170667a&w=0&k=20&c=owOOPDbI6VOp1xYA4smdTNSHxjcJGRtGfVXx24g6J4c=" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum dolorem quia dolore
                        corporis quibusdam molestiae soluta qui veritatis nesciunt!</p>
                    <h3>Christine Berkley</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i id='Home-testimonials-col-normal-star' class="fa-regular fa-star"></i>
                </div>
            </div>
            <div class="Home-testimonials-col">
                <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tempora maiores minus
                        exercitationem corporis, necessitatibus placeat cumque officia nostrum molestias.</p>
                    <h3>David Byer</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i  id='Home-testimonials-col-half-star' class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
        </div>

    </section>
    {/* <div className='chatbot-main'
      open={open} autoHideDuration={6000} onClose={handleClose}
      > */}
        {/* <div className='chatbot-main-head'>
            <div className='chatbot-main-head-div-1'>
            <Avatar id='icon-avtar'>
                <Person3Icon id='icon-avtar-1'> </Person3Icon> */}
                {/* <img src="https://cdn-icons-png.flaticon.com/512/46/46010.png" id='icon-avtar-1' alt="" />
            </Avatar>
            </div>
            <div className='chatbot-main-head-div-2'>
                <h4>Rüya  </h4>
            </div> */}
            {/* <div className='chatbot-main-head-div-3'>
               <CloseIcon className='chatbot-main-head-div-3-closebtn' onClose={handleClose}></CloseIcon>
            </div> */}
        {/* </div>
        <div className='chatbot-main-content'>
            <div className='chatbot-main-content-child'>
                <h6>Rüya </h6>
                <h2>Hi there! <br/>How can I help you?</h2>
            </div>
            </div>
        <div className='chatbot-main-tail'>
             */}
            {/* <div className='chatbot-main-tail-btn'> */}
            {/* <a
        href="https://wa.me/2348100000000"
        className="chatbot-main-tail-btn-a"
        target="_blank"
        rel="noopener noreferrer"
      > */}
        {/* <a href="https://api.whatsapp.com/send?phone=15551234567"  className="chatbot-main-tail-btn-a" target="_blank">
        <WhatsAppIcon className='chatbot-main-tail-btn-a-icon'></WhatsAppIcon>
           </a> */}
       {/* <WhatsAppIcon className='chatbot-main-tail-btn-a-icon'></WhatsAppIcon> */}
      {/* </a>  */}
      {/* <span id='chat'> Start Chat </span>        </div>
        </div>
        <div className='chatbot-main-whatsapp-div'> */}
        {/* <span variant="outlined" onClick={handleClick}>
        <WhatsAppIcon></WhatsAppIcon> connect
      </span> */}
        {/* </div>
    </div> */}
      <div className='home-footer-fixed-newsletter'>
          <div className='footer-fixed-newsletter-child-div'>
          <h2>Sign up for our newsletter</h2>
          <form>
                    <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                    <input type="submit" name="submit" value="Let's Start" id="" placeholder=""/>
        </form></div>
          
       
        </div>
        <div className='home-footer-fixed-connect-social'>
            <h3>Get connected with us on social networks: <span className='home-footer-fixed-connect-social-icons'>
              <a href="https://twitter.com/" target="_blank"><TwitterIcon/></a>
              <a href="https://www.facebook.com/" target="_blank" className='insta'><InstagramIcon/></a>
              <a href="https://www.instagram.com" target="_blank"><FacebookIcon/></a>
              <a href="https://www.google.com/" target="_blank"><GoogleIcon/></a>
              <a href="https://api.whatsapp.com/send?phone=15551234567" target="_blank"><WhatsAppIcon/></a>
              </span></h3>
        </div>

    </div>
  )
}

export default Home;