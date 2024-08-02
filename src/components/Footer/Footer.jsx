import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

import footer1 from '../../assets/footer1.png'
import footer2 from '../../assets/footer2.png'
import footer3 from '../../assets/footer3.png'
import footer4 from '../../assets/footer4.png'
import footer5 from '../../assets/footer5.png'
import footer6 from '../../assets/footer6.png'
import footer7 from '../../assets/footer7.png'
import navbarLogo from '../../assets/navbarLogo.png'


const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-top">
        <div className="footer-logo"><img src={navbarLogo}  style={{width:'158px' ,height:'78px'}}alt="" /></div>
        <div className="footer-logo"><img src={footer1} alt="" /></div>
        <div className="footer-logo"><img src={footer2} alt="" /></div>
        <div className="footer-logo"><img src={footer3} alt="" /></div>
        <div className="footer-logo"><img src={footer4} alt="" /></div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <div className="footer-icon"><img src={footer5} alt="" /></div>
          <div className="footer-rating">4.5/5 Rating On Lorem</div>
        </div>
        <div className="footer-section">
          <div className="footer-icon"><img src={footer6} alt="" /></div>
          <div className="footer-rating">9/10 Rating On Ipsum</div>
        </div>
        <div className="footer-section">
          <div className="footer-icon"><img src={footer7} alt="" /></div>
          <div className="footer-rating">4.5/5 Rating On Dorel</div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a  href="#hero">Home</a></li>
            <li><a  href="#skills">Skills</a></li>
            <li><a  href="#education">Education</a></li>
            <li><a  href="#projects">Projects</a></li>
            <li><a  href="#recommendations">Recommendations</a></li>
            <li><a  href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-portfolio">
          <h3>Portfolio</h3> 
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Website Design</li>
            <li>Machine Learning</li>
            <li>Problem Solving & DSA</li>
          </ul>
        </div>
        <div className="footer-connect">
          <h3>Connect</h3>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Copyright, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;