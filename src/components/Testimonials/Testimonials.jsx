import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow  from '../../assets/rightArrow.png'

const Testimonials = () => {

    const[selected,setSelected]=useState(0);
    const tLenght = testimonialsData.length;
  return (
    <div className='Testimonials'>
    <div className="left-t">
    <span>Testimonials</span>
    <span className='stroke-text'>Que dicen</span>
    <span>Sobre Nostros </span>
    <span>
        {testimonialsData[selected].review}
    </span>
    <span>
        <span style={{color:'"var((--orange)'}}>
       {testimonialsData[selected].name}
    </span>(" ")
            
    -   {testimonialsData[selected].status}
    </span>
    </div>
    <div className="right-t">
        <div></div>
        <div></div>
         {/*funcion para recorrer los testimonios */}
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img
            onClick={()=>{
               selected===0
            ? setSelected(tLenght -1)
            : setSelected((prev)=> prev-1);
            }}
            
            src={leftArrow} 
            alt=""
            />
         <img 
         onClick={()=>{
            selected === tLenght -1 
            ? setSelected(0) 
            : setSelected((prev)=>prev+1);

         }}
         
         src={rightArrow} alt="" />     
            </div>
    </div>
    </div>


  )
}

export default Testimonials
