import React from 'react'
import './Footer.css'
import Logo from "../../assets/logo.png"
import instagram from "../../assets/instagram.png"

const Footer = () => {
  return (
    <div children="Footer-container">

        <hr />
<div className="footer">
    
<div className='social-links'>
  <a href="https://www.instagram.com/agarrefalso/" target="_blank" rel="noopener noreferrer">
  <img src={instagram} alt="Instagram" style={{ width: '100px', height: 'auto' }} />
  </a>
</div>

</div>
</div>
  )
}

export default Footer
