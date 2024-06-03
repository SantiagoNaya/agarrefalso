import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>LISTO PARA EMPEZAR</span>
            <span> TU CAMINO</span>
            <span className='stroke-text'> CON NOSOTROS</span>
        </div>

       {/* plans card*/}
       <div className="plans">
        {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature,i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                     ))}
                </div>

                <div><span>Mira mas beneficios -></span>
                </div>
                <button className="btn">Unete Ahora</button>
            </div>

        ))}
       </div>

    </div>
  );
};

export default Plans
