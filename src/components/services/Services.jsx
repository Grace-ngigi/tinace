import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import web from '../../assets/web_i.png'
import graphic from '../../assets/design_i.png'
import phone from '../../assets/mobile_i.png'
const Services = () => {
  return (
    <section id='services'>
      {/* <h5>Our</h5> */}
      <h2 data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease" data-aos-duration="1000">Services</h2>
      <div className="container service_container">
        <article className='service' data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease" data-aos-duration="1000">
          <div className="service_head">
            <img src={graphic} alt="web" className='service_head_image' />
            <h3>Graphics Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Publishing Designs</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Branding Designs.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Product Designs.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Websites Designs.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Print Designs.</p>
            </li>
            <h4 className="techs">Designs</h4>
            <ul className='tech-icons'>
              <li className='tech-icons'>
                <GoPrimitiveDot className='list_icon' />
                <p>Billboard</p>
                <GoPrimitiveDot className='list_icon' />
                <p>Flyer</p>
                <GoPrimitiveDot className='list_icon' />
                <p>Banner</p>
              </li>
              <li className='tech-icons'>
                <GoPrimitiveDot className='list_icon' />
                <p>Letterhead</p>
                <GoPrimitiveDot className='list_icon' />
                <p>Business card</p>
              </li>
              <li className='tech-icons'>
                <GoPrimitiveDot className='list_icon' />
                <p>Website</p>
                <GoPrimitiveDot className='list_icon' />
                <p>Icon</p>
                <GoPrimitiveDot className='list_icon' />
                <p>Logo</p>
              </li>
            </ul>
          </ul>
        </article>

        <article className='service' data-aos="fade-up" data-aos-delay="150" data-aos-easing="ease" data-aos-duration="1000">
          <div className="service_head">
            <img src={web} alt="web" className='service_head_image' />
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Small-Business websites.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>E-commerce websites.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Portfolio websites.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Personal websites.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Blog websites.</p>
            </li>
            <h4 className="techs">Technologies</h4>
            <li className='tech-icons'>
              <GoPrimitiveDot className='list_icon' />
              <p>HTML</p>
              <GoPrimitiveDot className='list_icon' />
              <p>CSS</p>
              <GoPrimitiveDot className='list_icon' />
              <p>Javascript</p>
            </li>
            <li className='tech-icons'>
              <GoPrimitiveDot className='list_icon' />
              <p>Bootstrap</p>
              <GoPrimitiveDot className='list_icon' />
              <p>MongoDb</p>
            </li>
            <li>
              <GoPrimitiveDot className='list_icon' />
              <p>React</p>
              <GoPrimitiveDot className='list_icon' />
              <p>NodeJs</p>
              <GoPrimitiveDot className='list_icon' />
              <p>PHP</p>
            </li>
          </ul>
        </article>

        <article className='service' data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease" data-aos-duration="1000">
          <div className="service_head">
            <img src={phone} alt="web" className='service_head_image' />
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Travel Apps.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Lifestyle Apps.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Education Apps.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>productivity Apps.</p>
            </li> <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Entertainment Apps.</p>
            </li>
            <h4 className="techs">Technologies</h4>
            <li className='tech-icons'>
              <GoPrimitiveDot className='list_icon' />
              <p>XML</p>
              <GoPrimitiveDot className='list_icon' />
              <p>Kotlin</p>
              <GoPrimitiveDot className='list_icon' />
              <p>Firebase</p>
            </li>
            <li className='tech-icons'>
              <GoPrimitiveDot className='list_icon' />
              <p>Ktor</p>
              <GoPrimitiveDot className='list_icon' />
              <p>Room Database</p>
            </li>
            <li className='tech-icons'>
              <GoPrimitiveDot className='list_icon' />
              <p>Java</p>
              <GoPrimitiveDot className='list_icon' />
              <p>SQLite</p>
              <GoPrimitiveDot className='list_icon' />
              <p>flutter</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services