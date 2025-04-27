import React from 'react';
import './Experience.css';

const Experience = () => {
  // Sample experience data - replace with your own
  const experiences = [
    {
      id: 1,
      role: 'Deployment Officer',
      company: 'NewTab',
      duration: 'May 2024 - Oct 2024',
      description: 'Built cross-platform apps like Ride Bhaiya using Flutter, Firebase, and REST APIs, focusing on performance, UX, and smooth CI/CD-driven deployments',
    },
    /*{
      id: 2,
      role: 'Web Developer',
      company: 'Previous Company',
      duration: 'Mar 2018 - Dec 2019',
      description: 'Describe your responsibilities and achievements in this role. Mention specific projects, technologies used, and results achieved.',
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'First Company',
      duration: 'Jun 2016 - Feb 2018',
      description: 'Describe your responsibilities and achievements in this role. Mention specific projects, technologies used, and results achieved.',
    },*/
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          Professional Experience
        </h2>
        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className={`experience-content ${index % 2 === 0 ? 'right-aligned' : 'left-aligned'}`}>
                {/* Timeline dot */}
                <div className="timeline-dot"></div>
                
                {/* Content */}
                <div className="experience-card">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-details">
                    <span className="company-name">{exp.company}</span>
                    <span className="duration-separator">•</span>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;