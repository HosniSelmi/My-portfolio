import React from 'react'

import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  )
}

export default HeaderSocials
