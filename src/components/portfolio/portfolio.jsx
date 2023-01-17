import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio5.png'
import IMG5 from '../../assets/portfolio6.jpg'


// DO NOT USE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My First Project',
    github: 'https://github.com/HosniSelmi/myfirstproject'
   
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Website',
    github: 'https://github.com/HosniSelmi/Blog-Website',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Web Server For Sale',
    github: 'https://github.com/HosniSelmi/webserver_forsale'
    
  },
  {
    id: 4,
    image: IMG4,
    title: 'ENSI Project',
    github: 'https://github.com/HosniSelmi/NewNew'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Summer Internship',
    github: 'https://github.com/HosniSelmi/Summer_Internship'
    
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel='noreferrer' target='_blank'>GitHub</a>  
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio