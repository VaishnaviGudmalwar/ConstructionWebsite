import React from 'react';
import './Gallery.css';
export const Gallery = () => {
    const services=[{
        "id": 1,
          "image": "https://losangelesgeneralcontractor.com/wp-content/uploads/2017/09/builders-in-Los-Angeles-12-300x300.jpg",
        },{
             "id": 2,
     "image":"https://losangelesgeneralcontractor.com/wp-content/uploads/2017/01/New-Construction-Project-Los-Angeles.jpg"},{
         "id": 3,
"image":"https://images.adsttc.com/media/images/6077/43aa/ebb5/fc01/6543/b86b/newsletter/fi-img-1234.jpg?1618428850"
},{
         "id": 4,
"image":"https://media.designcafe.com/wp-content/uploads/2020/06/23130933/traditional-indian-kitchen-design.jpg"
},{
         "id": 5,
"image":"https://i.pinimg.com/550x/e2/6a/e4/e26ae40fa6a30a61d4c8242b69ac6401.jpg"
},{
         "id": 6,
"image":"http://www.theeasternhotel.com/uploads/gallery/NSP_1733a.jpg"

},{
         "id": 7,
"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQup-GHifQfwYZRp7tVpByvyVxckoexLyIbNg&usqp=CAU"

},{
         "id": 8,
"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyXKVUb4iJRhvfM9AVE-jp79vHXK7gNte5g&usqp=CAU"
}
,{
         "id": 9,
"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU"
}

]
  return (
    <div>
         <div className='Gallery-Container'>
      <div className='Gallery-Container-img-div'>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
        <div className='Gallery-heading'>
            <div className='Gallery-heading-child'><h3>Gallery</h3></div>
        </div>
        <div className='Gallery-photos-container'>
            <div className='Gallery-photos-container-flex'>
                {
                    services.map((item,index)=>{
                    // return    <div key={index} className='Gallery-photos-container-flex-main'>
                    //         <div className='Gallery-photos-container-flex-main-div-1'>
                    //         <img src={item.image} alt="" />
                    //         </div>
                    //         {/* <div className='Gallery-photos-container-flex-main-div-2'><h6>{item.title}</h6></div> */}
                    //     </div>
                    return(
                        <div key={index} className='Gallery-photos-container-css-2'>
                             <img src={item.image} alt="" />
                        </div>
                    )
                    })
                }
            </div>
        </div>

    </div>
  )
}
