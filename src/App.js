import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './app.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
// import Portfolio from './components/porfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App