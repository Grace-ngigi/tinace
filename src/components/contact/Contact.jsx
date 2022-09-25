import React, { useRef } from 'react'
import './contact.css'
import Emailjs from 'emailjs-com'
import { MdOutlineEmail } from 'react-icons/md'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { MdCall } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    Emailjs.sendForm('service_n7ie1i6', 'template_jpkxvd3', form.current, '4yUFp7DKnjK-kJtUY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h2 data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease" data-aos-duration="1000">Contact Us</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease" data-aos-duration="1000">
            <div className="icon-inline">
              <MdOutlineEmail className='contact-option-icon' />
              <h4>Yahoo</h4>
            </div>
            <a href="mailto:tinace.solution@yahoo.com">tinace.solutions</a>
          </article>

          <article className="contact_option" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease" data-aos-duration="1000">
            <div className="icon-inline">

              <MdCall className='contact-option-icon' />
              <h4>Call Us</h4>
              <BiMessageRoundedDots className='contact-option-icon' />
            </div>
            <a href="">0768076417 / 0774861291</a>

          </article>

          <article className="contact_option" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease" data-aos-duration="1000">
            <div className="icon-inline">
              <BsWhatsapp className='contact-option-icon' />
              <h4>WhatsApp</h4>
            </div>
            <a href="https://api.whatsapp.com/send?phone+254768076417">+254768076417</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="zoom-out" data-aos-delay="250" data-aos-easing="ease" data-aos-duration="1000">
          <div className="form-inputs-inline">
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name="email" id="email" placeholder='Your Email' required />
          </div>
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact