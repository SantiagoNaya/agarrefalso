import React from 'react'
import './Join.css'

const Join = () => {
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

<form action="" className="email-container">
<input type="email" name='user_email' placeholder='Ingresa tu email' />
<button className='btn btn-j'>Unete Ahora</button>
</form>
</div>
   </div>
  )
}

export default Join
