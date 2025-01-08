import React from "react";
import './Hero.css';
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_image from '../Assests/hero_image.png';
import ukesh_image from '../Assests/uki.png';
import naveen_image from '../Assests/naveen.png';
import bille_image from '../Assests/bille1.png';


function Hero(){
    return(
        <div className="hero"> 

                <div className="hero-left">
                       <h2>NEW ARRIVALS ONLY</h2>
                       <div>
                           <div className="hero-hand-icon">
                              <p>new</p>
                              <img src={hand_icon} alt=""/>
                           </div>
                           <p>collections</p>
                           <p>for everyone</p>
                       </div>
                          <div className="hero-lastest-btn">
                              <div>Lastest Collection</div>
                              <img src={arrow_icon} alt=""/>
                          </div>
                </div>

                   <div className="hero-right">
                      {/* <img src={ukesh_image} alt="" width={"650px"}/> */}
                      {/* <img src={naveen_image} alt=""/> */}
                      {/* <img src={hero_image} alt=""/> */}    
                      <img src={bille_image} alt="" width={"540px"} />

                   </div>
           


        </div>
    )
}
export default Hero;