import React from 'react';
import './OurServices.css';
export const OurServices = () => {
    const services=[{
            "id": 1,
            "title": "General Contracting",
            "description": "From remodeling to building a new home from the ground up, Rüya Construction Group is passionate about creating a rewarding construction experience for our clients, our designers and trade partners, and our team.",
            "image": "https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/GENERAL-CONTRACTING_ICON_JOELCO-1.png",
            },{
                 "id": 2,
        "title": "Commercial Construction",
        "description":"Whether you need to renovate a restaurant or build a new, high-end spa, Rüya Construction Group’s quality workmanship makes the planning and construction process simple and easy ⁠— resolving in a practical and attractive commercial space.",
        "image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/COMMERCIAL-CONSTRUCTION_ICON_JOELCO2.png"
        },{
             "id": 3,
    "title": "Custom Home Building",
    "description":"The team at Rüya Construction Group possess a powerful understanding of the design process, and the creativity to synthesize it with construction planning.",
    "image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/CUSTOM-HOME-BUILDING_ICON_JOELCO-1.png"
    },{
             "id": 4,
    "title": "Kitchen Remodeling",
    "description":"Remodeling the kitchen is a great way to give a home a facelift. Working within the client’s budget, Rüya Construction Group provides the best service and return on investment.",
    "image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/BATHROOM-REMODELING_ICON_JOELCO-1.png"
    },{
             "id": 5,
    "title": "Bathroom Remodeling",
    "description":"Rüya Construction Group can transform any bathroom into a desirable retreat ⁠— bringing the vision of the homeowner to life by redesigning and remodeling their old bathrooms and transforming them into a dream space.",
    "image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/05/BATHROOM-REMODELING_ICON_JOELCO-rev.png"
    },{
             "id": 6,
    "title": "Room Additions",
    "description":"Adding additional rooms is an important job and is best left to an experienced room addition contractor. Rüya Construction Group provides renditions of the general and specific areas of the home to present the best plan of action for the new addition.",
    "image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2020/02/ROOM-ADDITIONS_ICON_JOELCO2.png"
    }
    ]
  return (
         <>
          <div className='services-Container'>
      <div className='services-Container-img-div'>
        {/* <img src="" alt="" /> */}
      </div>
      </div>
         <div className='services-main'>
       <div className='services-div-1'>
           <h4>Our</h4>
           <h3>services</h3>
       </div>
       <div className='services-div-2'>
           <div className='services-child-div'>
               <p>Our unified team of architects, designers, and construction professionals brings a thoughtful approach to your project as a whole, and to all the details that make your home feel uniquely yours. Each project we undertake starts with you – what are your needs, desires, and dreams for your home? Let’s explore how to make your home more livable and beautiful today.</p>
           </div>
       </div>
   </div>
   <div className='card-services'>
        {
            services.map((item,index)=>{
                return(
                    <div className='S-card-Item' key={index}>
                        <div className='S-card-Item-img'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='S-card-Item-desc'>
                            <h1>{item.title}</h1>
                            <h6>{item.description}</h6>
                        </div>
                    </div>
                ) 
            })
        }
   </div>
   </>
  )
}
