import React, { useEffect } from 'react';
import axios from 'axios';
import './Plans.css';
import whiteTick from '../../assets/whiteTick.png';

const Plans = ({ plansList, setPlansList }) => {
  useEffect(() => {
    // Fetch the plans from the backend when the component mounts
    axios.get('http://localhost:8888/planes')
      .then(response => {
        console.log("RESPONSE: ", response)
        setPlansList(response.data.results);
      })
      .catch(error => {
        console.error('There was an error fetching the plans!', error);
      });
  }, [setPlansList]);

  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className='stroke-text'>LISTO PARA EMPEZAR</span>
        <span> TU CAMINO</span>
        <span className='stroke-text'> CON NOSOTROS</span>
      </div>
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
            <span>{plan.nombre}</span>
            <span>$ {plan.precio}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={feature.id}>
                  <img src={whiteTick} alt="" />
                  <span>{feature.descripcion}</span>
                </div>
              ))}
            </div>
            <div><span>Mira más beneficios -></span></div>
            <button className="btn">Únete Ahora</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;