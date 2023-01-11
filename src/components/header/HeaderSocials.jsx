import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" ><BsLinkedin/></a >
        <a href="https://github.com/abdelkarim1222" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><FiMail/></a>
        <a href="https://www.facebook.com/ezzar.abdlekrim.5/" target="_blank" rel="noreferrer"><FaFacebook/></a>
          

    </div>
  )
}

export default HeaderSocials
