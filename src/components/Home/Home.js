import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'images/service_img1.png',
    caption: 'Slide 1'
  },
  {
    url: 'images/service_img2.png',
    caption: 'Slide 2'
  },
  {
    url: 'images/service_img3.png',
    caption: 'Slide 3'
  },
  {
   url: 'images/service_img4.png',
   caption: 'Slide 3'
 },
];

const Home = () => {
  
    return (
      <div className=" banner_main">
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
   </div>
    )
}

export default Home;