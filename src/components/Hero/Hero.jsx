import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  
    return (
        <div className="hero">


            <div className="left-h">
                {/* the best ad*/}
                <div className="the-best-ad">
                    <div></div>
                    <span>el mejor grupo de calistenia</span>
                </div>
                    {/* Hero Heading*/}
                <div className="hero-text">
                <div>
                    <span className='stroke-text'> Entrena</span>
                    <span>Tu</span>
                </div>
                <div>
                <span> Cuerpo </span>
                </div>
                <div>
                    <span>
                        Aca te ayudaremos a armar y construir el cuerpo de tu sueños para vivir una vida completa
                    </span>
                    </div>
                </div>
                     {/* figuras*/}
             <div className="figures">
                <div>
                    <span> +140 </span>
                    <span> Entrenadores Expertos </span>
                    </div>
                <div>
                    <span> +978 </span>
                    <span> mienmbros nuevos</span>
                    </div>
                <div>
                    <span> +40 </span>
                    <span> Programas de entrenamiento </span>
                    </div>
             </div>
           
         
             </div>
        
          
           {/* calories*/}
       
        </div>
        
    )
}

export default Hero