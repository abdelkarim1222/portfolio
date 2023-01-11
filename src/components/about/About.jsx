/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/145.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary}from 'react-icons/vsc'

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
              <h5>Niveau D'étude</h5>
              <small>Bac Technique 2019           </small>
              <small>Engineering student at Ecole Polytechnique de Sousse</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <a href='https://github.com/abdelkarim1222' target='_blank' rel="noreferrer"><h5>Projects</h5></a>
              
              <small></small>
            </article>
            </div>
            <p>Im an it engineering student at Ecole Polytechnique de sousse.</p>
        <a href="#contact"className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About
