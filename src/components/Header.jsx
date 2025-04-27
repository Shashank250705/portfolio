import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Suddala Shashank</div>
        <nav className="nav-desktop">
          <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
          <Link to="experience" smooth={true} duration={500} className="nav-link">Experience</Link>
          <Link to="education" smooth={true} duration={500} className="nav-link">Education</Link>
          <Link to="certifications" smooth={true} duration={500} className="nav-link">Certifications</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        </nav>
        <div className="nav-mobile">
          <button className="menu-button">
            <svg className="menu-icon" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;