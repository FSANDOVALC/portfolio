import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>I worked in:</h5>
              <small>Cloudpay (present)</small>
              <br/>
              <small>Usreen (Ago 20 - Jan 22)</small>
              <br/>
              <small>3M (Sep 19 - Ago 22)</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Passionate Software Developer experienced working with Object oriented programming, Design Patterns, C++, Java, C#, JavaScript, SQL, MongoDB, HTML5/CSS, SpringBoot, Vue.js, React, etc.
          </p>
          <p>Hobbies: I love nature and doing activities outdoor in my free time, also I know how to speak English / Spanish / Portuguese.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About