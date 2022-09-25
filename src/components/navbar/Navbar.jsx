import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo-color-bright.png'

const Navbar = () => {
  const [active, setSetActive] = useState("#")
  return (
    <nav>
      <a href="#home"><img className="logo" src={Logo} alt="Logo" /></a>
      {/* <a href="#home" className='active'>Home</a> */}
      <a
        href="#about"
        onClick={() => setSetActive('#')}
        className={active === '#' ? 'active' : ''}>
        <h4>ABOUT</h4>
      </a>

      <a href="#services">
        <h4>SERVICES</h4>
      </a>
      <a href="#contact">
        <h4>CONTACT</h4>
      </a>
    </nav>
  )
}

export default Navbar