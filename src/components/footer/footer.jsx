import React from 'react'
import './footer.css'

import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <a href="/#" className="footer__logo">
          Mohamed Hosni Selmi
        </a>

        <ul className="footer__links">
          <li><a href="/#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com/in/mohamed-hosni-selmi-943427223" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="https://github.com/HosniSelmi" target="_blank" rel="noreferrer" aria-label="GitHub">
            <BsGithub />
          </a>
          <a href="https://www.facebook.com/hosny.selmy.1" target="_blank" rel="noreferrer" aria-label="Facebook">
            <BsFacebook />
          </a>
        </div>

        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Mohamed Hosni Selmi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
