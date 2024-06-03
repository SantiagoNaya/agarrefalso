import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import adidas from "../../assets/nb.png"
import nb from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"


const Reasons=()=> {
  return (
   <div className="Reasons" id='reasons'>
    <div className="left-r">
<img src={image1} alt="" />
<img src={image2} alt="" />
<img src={image3} alt="" />
<img src={image4} alt="" />
    </div>



    <div className="right-r">
    
        <span>algunas Rasones</span>
    <div>
        <span className='stroke-text'>para</span>
        <span> elegir nos?</span>
        </div>

        <div className='details-r'>
        <div>
     <img src={tick} alt=""></img>
     <span>Mas de 140+ Entrenadores Expertos</span>
            </div>
        <div>
            <img src={tick} alt="" />
            <span>ENTRENA MAS RAPIDO Y INTELIGENTE QUE ANTES</span>
            </div>
        <div>
            <img src={tick} alt="" />
        <span>PRIMER PROGRAMA GRATIS PARA NUEVOS MIEMBROS</span>
        </div>
        <div>
            <img src={tick} alt="" />
            <span>PARTNERS CONFIABLES</span>
            </div>
        </div>
        <span style={{
            color: "var(--gray)",
            fontWeight: "normal",
         }}
         >NUESTROS PARTNERS
         </span>
           <div className='partners'>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
           </div>
     </div>
</div>
  )
}

export default Reasons