import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/logo.png";
import hero_image_back from "../../assets/logo.png";
import Heart from "../../assets/logo.png";
import Calories from "../../assets/logo.png";
const Hero = () => {
    return (
        <div className="hero">


            <div className="left-h">
                <Header/>
                {/* the best ad*/}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
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
        
            <div className="right-h"> right side </div>
        </div>
        
    )
}

export default Hero