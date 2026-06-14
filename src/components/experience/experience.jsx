import React from 'react'
import './experience.css'

const frontend = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Flutter', level: 'Advanced' },
  { name: 'Angular', level: 'Basics' },
]

const backend = [
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Express.js', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'C++', level: 'Advanced' },
  { name: 'NestJS', level: 'Intermediate' },
  { name: 'Symfony', level: 'Advanced' },
  { name: 'Flask', level: 'Advanced' },
  { name: 'Spring Boot', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'MySQL', level: 'Advanced' },
]

const levelDots = {
  Advanced: 3,
  Intermediate: 2,
  Basics: 1,
}

function SkillCard({ name, level }) {
  return (
    <div className="skill__card">
      <div className="skill__info">
        <span className="skill__name">{name}</span>
        <span className="skill__level">{level}</span>
      </div>
      <div className="skill__dots">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`skill__dot ${i <= levelDots[level] ? 'filled' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <h5>Skills</h5>
          <h2>My Experience</h2>
        </div>

        <div className="experience__grid">
          <div className="experience__column reveal">
            <h3 className="experience__column-title">Frontend</h3>
            <div className="experience__skills">
              {frontend.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="experience__column reveal">
            <h3 className="experience__column-title">Backend & Database</h3>
            <div className="experience__skills">
              {backend.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
