import * as React from 'react';
import './Whatsapp.css';
import Avatar from '@mui/material/Avatar';
import Person3Icon from '@mui/icons-material/Person3';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const Whatsapp = () => {
return (
    <div>    
    <div className='chatbot-main'>
        <div className='chatbot-main-head'>
            <div className='chatbot-main-head-div-1'>
            <Avatar id='icon-avtar'>
                {/* <Person3Icon id='icon-avtar-1'> </Person3Icon> */}
                <img src="https://cdn-icons-png.flaticon.com/512/46/46010.png" id='icon-avtar-1' alt="" />
            </Avatar>
            </div>
            <div className='chatbot-main-head-div-2'>
                <h4>Rüya Construction Group </h4>
            </div>
        </div>
        <div className='chatbot-main-content'>
            <div className='chatbot-main-content-child'>
                <h6>Rüya Construction Group</h6>
                <h2>Hi there! <br/>How can I help you?</h2>
            </div>
            </div>
        <div className='chatbot-main-tail'>
            
            <div className='chatbot-main-tail-btn'>
            <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
       <WhatsAppIcon className='whatsapp-icon'></WhatsAppIcon>
      </a> 
                
      Start Chat   </div>
        </div>
        <div className='chatbot-main-whatsapp-div'></div>
    </div>
    </div>
  )
}
