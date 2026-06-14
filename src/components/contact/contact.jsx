import React, { useRef } from 'react'
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerFill } from 'react-icons/ri'

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mto6qj5',
        'template_wrhy63s',
        form.current,
        'FC_d1NTT3noDsV7QR'
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <h5>Contact</h5>
          <h2>Get In Touch</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__options reveal">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <p className="contact__option-value">hosniselmi69@gmail.com</p>
              <a href="mailto:hosniselmi69@gmail.com" className="btn btn-sm">
                Send Email
              </a>
            </div>

            <div className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <p className="contact__option-value">+216 27 507 236</p>
              <a
                href="https://wa.me/21627507236"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm"
              >
                Send Message
              </a>
            </div>

            <div className="contact__option">
              <RiMessengerFill className="contact__option-icon" />
              <h4>Messenger</h4>
              <p className="contact__option-value">Hosny Selmy</p>
              <a
                href="https://m.me/hosny.selmy.1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm"
              >
                Send Message
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form reveal">
            <h3 className="contact__form-title">Send a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="contact__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="contact__input"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="contact__input contact__textarea"
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
