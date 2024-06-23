import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
const Header  = () => {
  const navigate =  useNavigate();


  const goToFormulario = () => {
   navigate('/formulario');
 };
  return (
 <div className="header">
 
 
  <img src={Logo} alt="" className='logo' />

 <ul className='header-menu'>
    <li>Home</li>
    <li>Programas</li>
    <li>Nosotros</li>
    <li>Planes</li>
    <li>Testimonios</li>
    <li onClick={goToFormulario}>Planes</li>
 </ul>
 
 
 </div>
  )
}
 
export default Header
