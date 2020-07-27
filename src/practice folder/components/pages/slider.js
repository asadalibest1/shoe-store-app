import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from '../../images/slide-image-1.jpg';  
import image3 from '../../images/slide-image-3.jpg';  
import image4 from '../../images/slide-image-4.jpg';  

// const fadeImages = [
//     "require(image1)",    
//     "image3",    
//     "image4",    
// ];
 
export default function Slider(){
    return (
        <div className="slide-container">
          <Slide>
            <div className="each-fade">
              <div className="image-container">
                <img style={{ height: "70vh", width: "100%" }} src={image1} />
              </div>
              {/* <h2>First Slide</h2> */}
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img style={{ height: "70vh", width: "100%" }} src={image3} />
              </div>
              {/* <h2>Second Slide</h2> */}
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img style={{ height: "70vh", width: "100%" }} src={image4} />
              </div>
              {/* <h2>Third Slide</h2> */}
            </div>
          </Slide>
        </div>
      )
    }