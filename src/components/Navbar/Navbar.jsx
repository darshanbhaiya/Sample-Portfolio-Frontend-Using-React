import React from 'react'
import './Navbar.css'
import navbarLogo from '../../assets/navbarLogo.png'


const Navbar = () => {
  return (
    <div className='navbar' id="navbar">

      <div className='navbarLogo' >
          <img src={navbarLogo} alt="navbarLogo" />
      </div>
          
      
      <ul >
        <li><a  href="#hero">Home</a></li>
        <li><a  href="#skills">Skills</a></li>
        <li><a  href="#education">Education</a></li>
        <li><a  href="#projects">Projects</a></li>
        <li><a  href="#recommendations">Recommendations</a></li>
        <li><a  href="#contact">Contact</a></li>
      </ul>
      

    </div>
  )
}

export default Navbar
