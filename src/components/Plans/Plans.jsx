import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = ({ plansList }) => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>LISTO PARA EMPEZAR</span>
                <span> TU CAMINO</span>
                <span className='stroke-text'> CON NOSOTROS</span>
            </div>
            {/* {
    name: '',
    price: '',
    hours: '',
    consultation: '',
    minibar: '',
    description: '',
  } */}
            {/* plans card*/}
            <div className="plans">
                {plansList.map((plan, i) => (
                    <div className="plan" key={plan.id}>
                        <svg
                            width="28"
                            height="24"
                            viewBox="0 0 28 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3.11111 18L0 1.5L8.55556 9L14 0L19.4444 9L28 1.5L24.8889 18H3.11111ZM24.8889 22.5C24.8889 23.4 24.2667 24 23.3333 24H4.66667C3.73333 24 3.11111 23.4 3.11111 22.5V21H24.8889V22.5Z" />
                        </svg>
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>Horas de Ejercicio: {plan.hours}</span>
                            </div>
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>Acceso al Minibar: {plan.minibar}</span>
                            </div>
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>Consulta Gratuita con Entrenadores: {plan.consultation}</span>
                            </div>
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
