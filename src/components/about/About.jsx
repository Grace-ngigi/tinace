import React from 'react'
import './about.css'
import { TbAward } from 'react-icons/tb'
import { FaUsers } from 'react-icons/fa'
import { GrSchedules } from 'react-icons/gr'

const About = () => {
  return (
    <section id='about' data-aos="fade-up" data-aos-duration="500">
      <h2 className='about-header' data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease" data-aos-duration="1000" >About Us</h2>
      <div className='container container-about'>
        <div className='about-content'>
          <p>Tinace is a tech-solution provider. We realize goals, share experiences and express ideas through graphics,
            fast and reliable mobile applications and robust websites.
            <br /><br />
            Being a team of passionate and talented software professionals, we
            predominantly aim at impacting people's lives positively by transforming their ideas into a visual functional software. </p>

          <div className="about_cards" data-aos="fade-left" data-aos-duration="1000">
            <article className="about_card">
              <TbAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>

            <article className="about_card">
              <FaUsers className='about_icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about_card">
              <GrSchedules className='about_icon' />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>
        </div>
        <div className="about-blob">
          <div className="blob"></div>
        </div>
      </div>
    </section>
  )
}

export default About