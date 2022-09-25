import React from 'react'
import './home.css'
import { GoPrimitiveDot } from 'react-icons/go'


const Home = () => {
  return (
    <header id='home'>
      {/* <img src={Image} className="header-image" alt="image" /> */}
      <div className="home-content">
        {/* <div className='tagline-content'> */}
        {/* <h3>Actualizing your imagination</h3> */}
        <h3 className='slogan'>Actualizing your imagination<GoPrimitiveDot className='dots' /><GoPrimitiveDot className='dots' /><GoPrimitiveDot className='dots' /></h3>
        {/* <h5>Through</h5> */}
        <div class="hwrap">
          <div class="hmove">
            <div class="hslide">
              <h3>Unique Designs</h3>
            </div>
            <div class="hslide">
              <h3>Robust Websites</h3>
            </div>
            <div class="hslide">
              <h3>Reliable Applications</h3>
            </div>
            {/* <div class="hslide">
            <h3>Mobile Developers</h3>
          </div> */}
          </div></div>        {/* <h2>Tinace Solutions</h2> */}
        {/* </div> */}
        {/* <h1>For the latest Graphic Designs, Websites and Mobile Apps
                    </h1>
                    <button className='btn'>Explore</button> */}
      </div>
    </header>

  )
}

export default Home