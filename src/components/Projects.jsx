import React from 'react';
import './Projects.css';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VTP',
      description: 'Designed and developed a dual-interface mobile app for CRT attendance using Flutter, Spring Boot, and PostgreSQL, featuring geofencing, Excel-based reports, and Twilio SMS alerts for real-time absentee tracking.',
      technologies: ['Flutter', 'Spring Boot', 'PostgreSQL', 'Docker', 'Twilio API', 'Git'],
      //image: '/images/ride-bhaiya.jpg',
      githubLink: 'https://github.com/Abhi-0987/Vishnu-Training-Placement'
    },
    {
      id: 2,
      title: 'Smart Cart',
      description: 'An innovative shopping cart system using AI for product recognition and AR for enhanced shopping experience.',
      technologies: ['Flutter', 'FireBase', 'FireStore', 'Node.js', 'Git'],
      //image: '/images/smartcart2.jpeg',
      githubLink: 'https://github.com/Shashank250705/smart-cart-ss'
    },
    {
      id: 3,
      title: 'Farm2Fresh',
      description: 'An e-commerce platform connecting farmers directly with consumers, featuring inventory management and delivery tracking.',
      technologies: ['Flutter', 'FireStore', 'GCP', 'Docker','Git', 'crop Health Api'],
      //image: '/images/farm2fresh.jpg',
      githubLink: 'https://github.com/Shashank250705/F2F'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <ScrollAnimation />
      <div className="container">
        <h2 className="section-title section-title-animation">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Container for project image */}
              {/*<div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>*/}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link github">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;