import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profilePhoto from '../images/profile_photo.png';  // Add this import
import './Hero.css';

const Hero = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'App Developer',
        'Web Developer',
        'Software Engineer',
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Suddala Shashank</span>
            </h1>
            <p className="hero-subtitle">
              <span ref={typedElementRef} className="typed-text"></span>
            </p>
            <p className="hero-description">
            I’m a passionate App Developer ans Web Developer with expertise in Flutter, Firebase, React.js, Spring Boot, and PostgreSQL. I’ve built and deployed end-to-end applications including Ride Bhaiya, Smart Cart with AI/AR, Farm2Fresh, and AI Fusion. During my internship at NewTab Technologies, I contributed to production-level features and gained hands-on experience in real-world development. I leverage Git, CI/CD, and REST APIs to create robust, scalable solutions.
            </p>
            <div className="hero-buttons">
              <a 
                href="/files/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                View Resume
              </a>
              <button className="btn-secondary">Contact Me</button>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="profile-image-wrapper">
              <img 
                src={profilePhoto} 
                alt="Suddala Shashank" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
