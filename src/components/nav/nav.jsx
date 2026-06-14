import React, { useState, useEffect } from 'react'
import './nav.css'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'

const sections = [
  { id: '#', label: 'Home', Icon: AiOutlineHome },
  { id: '#about', label: 'About', Icon: AiOutlineUser },
  { id: '#experience', label: 'Experience', Icon: BiBook },
  { id: '#portfolio', label: 'Portfolio', Icon: VscFolderLibrary },
  { id: '#contact', label: 'Contact', Icon: BiMessageSquareDetail },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            setActiveNav(id ? `#${id}` : '#')
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    sections.forEach(({ id }) => {
      const targetId = id === '#' ? 'root' : id.slice(1)
      const el = document.getElementById(targetId)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav>
      {sections.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`/${id}`}
          onClick={() => setActiveNav(id)}
          className={activeNav === id ? 'active' : ''}
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default Nav
