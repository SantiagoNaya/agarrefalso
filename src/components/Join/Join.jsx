import React from 'react'
import './Join.css'

const Join = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    alert('Se envió el mail');
};
  
  return (
   <div className="Join" id="join-us">
<div className='left-j'>
    <hr />

<div>
<span className='stroke-text'>LISTO PARA</span>
<span>AVANZAR EL NIVEL </span>
</div>
<div>
<span>DE TU CUERPO</span>
<span>CON NOSTROS</span>
</div>
</div>
<div className='right-j'>
</div>
   </div>
  )
}

export default Join
