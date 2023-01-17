import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>FOOTER</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/hosny.selmy.1"><FaFacebookF /></a>
      </div>
    </footer>
  )
}

export default Footer