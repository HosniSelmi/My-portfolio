import React from 'react'
import './about.css'

import ME from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <h5>About</h5>
          <h2>Get to Know Me</h2>
        </div>

        <div className="about__grid">
          <div className="about__image reveal">
            <div className="about__image-glow" />
            <div className="about__image-ring" />
            <div className="about__image-wrapper">
              <img src={ME} alt="Mohamed Hosni Selmi" />
            </div>
          </div>

          <div className="about__content reveal">
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">1+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">5+</span>
                <span className="about__stat-label">Clients</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Projects</span>
              </div>
            </div>

            <p className="about__bio">
              I am a software engineering graduate from the National School of Computer Science (ENSI).
              While I may not yet have extensive professional experience, I bring sincerity, dedication,
              and a strong passion for learning and growth, especially in artificial intelligence
              and software engineering. I believe everyone deserves the chance to prove themselves,
              and I'm fully committed to giving my best, exceeding expectations, and continuously
              improving to contribute meaningfully to any team I join.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
