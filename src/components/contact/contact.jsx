import React, { useRef } from 'react';
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mto6qj5', 'template_wrhy63s', form.current, 'FC_d1NTT3noDsV7QR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hosniselmi69@gmail.com</h5>
            <a href="mailto:hosniselmi69@gmail.com">Tap here to Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+216 27507236</h5>
            <a href="https://wa.me/21627507236" rel='noreferrer' target='_blank'>Tap here to send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Hosny Selmy</h5>
            <a href="https://m.me/hosny.selmy.1" rel='noreferrer' target='_blank'>Tap here to send a message</a>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Contact