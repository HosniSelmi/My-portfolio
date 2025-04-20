import React from 'react'

import {BsLinkedin} from 'react-icons/bs/'
import {BsGithub} from 'react-icons/bs/'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/mohamed-hosni-selmi-943427223" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/HosniSelmi" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials