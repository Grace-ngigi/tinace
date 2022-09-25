import React from 'react'
import './footer.css'
import { SiWhatsapp } from 'react-icons/si'
import { CgFacebook } from 'react-icons/cg'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer-logo'></a>
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com"><CgFacebook /></a>
        <a href="https://whatsapp.com"><SiWhatsapp /></a>
        <a href="https://intagram.com"><BsInstagram /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Tinace Solutions. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer