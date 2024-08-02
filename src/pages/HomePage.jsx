import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Recommendations from '../components/Recommendations/Recommendations'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Recommendations/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
