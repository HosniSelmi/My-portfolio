import React from 'react'
import './header.css'

import CTA from './CTA'
import ME from '../../assets/me-about1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__image-section">
          <div className="header__image-glow" />
          <div className="header__image-ring" />
          <div className="header__image">
            <img src={ME} alt="Mohamed Hosni Selmi" />
          </div>
        </div>

        <div className="header__text-section">
          <h5 className="header__greeting">Hello, I'm</h5>
          <h1>Mohamed Hosni Selmi</h1>
          <div className="header__divider">
            <span className="header__divider-icon">✦</span>
          </div>
          <p className="header__title">Software Engineer</p>
          <p className="header__tagline">
            CS graduate from ENSI &middot; Full-stack developer &middot; Passionate about building meaningful software
          </p>
          <CTA />
        </div>

        <HeaderSocials />

        <a href="#about" className="scroll__down">
          <span className="scroll__text">Scroll</span>
          <span className="scroll__arrow">↓</span>
        </a>
      </div>
    </header>
  )
}

export default Header
