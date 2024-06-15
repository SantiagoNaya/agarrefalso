import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs =() => {
  return (
    <div className="Program" id="programs">
          {/* header*/}
<div className="Programs-header">
          <span className='stroke-text'>Conoce Mas</span>
          <span> Acerca de nuestros </span>
     <span className='stroke-text'> Planes De Entrenamiento</span>
     </div>
     <div className="program-categories">
        {programsData.map((program)=>(
          <div className="category">
              {program.image}
              <span>{program.heading}</span> 
              <span>{program.details}</span>
              <div className="join-now"><span>Unete ahora</span><img src={RightArrow} alt="" /></div>
          </div>
        ))}
     
    
     </div>    
    </div>
    
  );
};

export default Programs;