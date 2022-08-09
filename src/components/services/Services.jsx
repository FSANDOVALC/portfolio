import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bulding sites with modern frameworks like React / Vue.js or Angular.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced building responsive websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced using Bootstrap.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced using TypeScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced helping with design and code reviews.</p>
            </li>
          </ul>
        </article>
        {/* FRONTEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Backend development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knowledge in object oriented programming languages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience working on technological challenging projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced building microservices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced using containers (Docker/Kubernetes).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced helping with design and code reviews.</p>
            </li>
          </ul>
        </article>
        {/* BACKEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Soft/General skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Used to work in challenging environment.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Always a collaborator and love to help others.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Love to learn new things and technologies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Passionate about technology and innovation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in managing teams.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced with SCRUM and agile methods.</p>
            </li>
          </ul>
        </article>
        {/* SOFT SKILLS */}
      </div>
    </section>
  )
}

export default Services