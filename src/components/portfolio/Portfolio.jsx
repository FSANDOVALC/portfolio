import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Theather seats management app in C++.',
    github: 'https://github.com/FSANDOVALC/ProyectoTeatro',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Palindrome done in assembly.',
    github: 'https://github.com/FSANDOVALC/PalindromoEnsamblador',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tour planning service including hotels, tours, food. (Java / Springboot)',
    github: 'https://github.com/antoniosmsncenfo/gothere',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Carbon print calculator site. (React)',
    github: 'https://github.com/FSANDOVALC/CarbonPrint',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
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