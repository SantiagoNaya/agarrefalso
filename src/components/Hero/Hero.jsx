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
                <Header/>
                {/* the best ad*/}
                <div className="the-best-ad">
                    <div></div>
                    <span>El Mejor Club de fitness en la ciudad</span>
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
           
             {/* hero buttons*/}
             <div className="hero-buttons">
                <button className="btn">Comenza Aca</button>
                <button className="btn">Aprende Mas</button>
             </div>
             </div>
        
            <div className="right-h"> 
          

            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Latidos </span> <span>116 bpm</span>
            </div>

            {/* hero img*/}
            <img src={hero_image} alt="" className='hero-image'/>
            <img src={hero_image_back} alt="" className='hero-image-back'/>
            </div>
           {/* calories*/}
            <div className="calories">
                <img src={Calories} alt="" />
                <span>Calorias Quemadas</span> <span>220 Kcal</span>
          </div>
        </div>
        
    )
}

export default Hero