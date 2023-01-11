/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./contact.css"
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


function Contact() {
  const form = useRef();

  // eslint-disable-next-line no-unused-vars
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmjwjas', 'template_kyoq6oc', form.current, 'wHqwEmX6V1x-ivubk')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__options-icon' />
            <h4>Email</h4>
            <h5>Ezzar30@gmial.com</h5>
            <a href="mailto:Ezzar30@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__options-icon' />
            <h4>Messenger</h4>
            <h5>Ezzar Abdelkarim</h5>
            <a href="https://m.me/ezzar.abdlekrim.5" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__options-icon' />
            <h4>Whatsapp</h4>
            <h5>+21650778808</h5>
            <a href="https://api.whatsapp.com/send?phone+21650778808" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn__primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
