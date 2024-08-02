import React from 'react'
import './Hero.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import image from '../../assets/heroImage.png'

const Hero = () => {
  return (
    <div className='hero' id="hero">

        <div className='heroContent'>

          <h1>I'm Darshan Bhaiya</h1>
          <h1> <span style={{color:'#ffb727'}}>Front-end</span> Developer</h1>

          <br /><br />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo vero mollitia vitae inventore ducimus, doloribus quos? Ducimus, beatae laboriosam soluta amet blanditiis, sed maxime voluptate ab quos officia a ullam.</p>


          <br />
          <br />
          <br />

          <a href="https://darshanbhaiya.github.io/"><button>Hire me  <FaLongArrowAltRight style={{marginLeft:'3px'}} /></button></a>
      
        </div>

        <div className='ellipse1'></div>
        <div className='ellipse2'></div>
        <div className='ellipse3'></div>
        <div className='ellipse4'></div>
        <div className='rectangle1'></div>
        <div className='rectangle2'></div>
        <div className='triangle'></div>
        <img src={image} alt="" className='image'/>
    </div>
  )
}

export default Hero
