import React, { useState } from 'react'
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
    title: "Digital Car Marketplace",
    tags: ["React", "Express.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/HosniSelmi/Digital-Car-Marketplace",
    demo: "https://digital-car-marketplace-1.onrender.com/",
  },
  {
    id: 2,
    image: IMG1,
    title: "PFE E-Commerce Plateforme",
    tags: ["Symfony", "React + TypeScript", "Docker", "MySQL"],
    github: "https://github.com/HosniSelmi/PFE",
    demo: "https://drive.google.com/file/d/11kGldrLrgkg4bLNp2_HKH6iUPeq75L08/view",
  },
  {
    id: 3,
    image: IMG2,
    title: 'My First Project',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/HosniSelmi/myfirstproject',
    demo: 'https://myfirstproject-mhs8.vercel.app/',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Blog Website',
    tags: ['React', 'Express.js'],
    github: 'https://github.com/HosniSelmi/Blog-Website',
    demo: 'https://blog-website-kxjp.onrender.com/',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Web Server For Sale',
    tags: ['HTML', 'CSS', 'JS', 'Node.js'],
    github: 'https://github.com/HosniSelmi/webserver_forsale',
  },
  {
    id: 6,
    image: IMG5,
    title: 'ENSI Project',
    tags: ['Fullstack JS'],
    github: 'https://github.com/HosniSelmi/NewNew',
  },
  {
    id: 7,
    image: IMG1,
    title: 'Summer Internship',
    tags: ['Fullstack JS'],
    github: 'https://github.com/HosniSelmi/Summer_Internship',
  },
]

const ITEMS_PER_PAGE = 4

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1)
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1)
  }

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <h5>Projects</h5>
          <h2>Recent Work</h2>
        </div>

        <div className="portfolio__grid">
          {visibleData.map(({ id, image, title, tags, github, demo }) => (
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

        <div className="portfolio__pagination">
          <button
            className="portfolio__page-btn"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            &larr;
          </button>
          <span className="portfolio__page-info">
            {currentPage} / {totalPages}
          </span>
          <button
            className="portfolio__page-btn"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
