import React from 'react';
import './About.css';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="about-section">
      <ScrollAnimation />
      <div className="container">
        <h2 className="section-title section-title-animation">
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text full-width fade-in-up">
            <h3 className="subsection-title">Who I Am</h3>
            <p className="text-paragraph">
              I'm a dedicated Full Stack and App Developer with a passion for turning ideas into practical, user-friendly applications. With experience in Flutter, React.js, Spring Boot, Firebase, and PostgreSQL, I've built projects that solve real-world challenges. My journey—from academic learning to hands-on development during my internship at NewTab Technologies—has shaped my goal to contribute to impactful, scalable tech solutions.
            </p>
            <p className="text-paragraph">
              I believe in writing clean, maintainable code and collaborating effectively to bring ideas to life. I'm driven by problem-solving, and I approach every project with creativity, consistency, and a focus on quality. Whether working in a team or independently, clients and employers can count on me for reliability, timely delivery, and innovative solutions that scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;