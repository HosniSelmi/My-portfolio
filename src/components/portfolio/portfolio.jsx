import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio5.png'
import IMG5 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My First Project',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/HosniSelmi/myfirstproject',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Website',
    tags: ['React', 'Express'],
    github: 'https://github.com/HosniSelmi/Blog-Website',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Web Server For Sale',
    tags: ['Node.js', 'Express'],
    github: 'https://github.com/HosniSelmi/webserver_forsale',
  },
  {
    id: 4,
    image: IMG4,
    title: 'ENSI Project',
    tags: ['Full Stack'],
    github: 'https://github.com/HosniSelmi/NewNew',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Summer Internship',
    tags: ['Spring Boot', 'Angular'],
    github: 'https://github.com/HosniSelmi/Summer_Internship',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <h5>Projects</h5>
          <h2>Recent Work</h2>
        </div>

        <div className="portfolio__grid">
          {data.map(({ id, image, title, tags, github, demo }) => (
            <article key={id} className="portfolio__card reveal">
              <div className="portfolio__image">
                <img src={image} alt={title} loading="lazy" />
                <div className="portfolio__overlay">
                  <span className="portfolio__overlay-text">View Project</span>
                </div>
              </div>
              <div className="portfolio__body">
                <h3 className="portfolio__title">{title}</h3>
                <div className="portfolio__tags">
                  {tags.map((tag) => (
                    <span key={tag} className="portfolio__tag">{tag}</span>
                  ))}
                </div>
                <div className="portfolio__links">
                  <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm">
                    GitHub
                  </a>
                  {demo && (
                    <a href={demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
