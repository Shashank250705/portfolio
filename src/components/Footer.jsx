import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Suddala Shashank</h3>
            <p className="footer-description">
              A passionate developer dedicated to creating amazing app experiences.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/suddala-shashank/" className="social-link">LinkedIn</a>
              <a href="'https://github.com/Shashank250705" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Suddala Shashank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;