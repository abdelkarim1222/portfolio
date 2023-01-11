/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import{AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import{BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react' 



const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experionce"onClick={() => setActiveNav('#experionce')}className={activeNav ==='#experionce' ? 'active' : ''}><BiBook/></a>
      <a href="#services"onClick={() => setActiveNav('#services')}className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}
export default Nav
