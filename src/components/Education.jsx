import React from 'react';
import './Education.css';
import ScrollAnimation from './ScrollAnimation';  // Add this import

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'B V Raju Institute Of Technology',
      duration: '2022 - 2026',
      //description: 'Describe your academic achievements, relevant coursework, projects, and any honors or awards received.',
    },
   {
      id: 2,
      degree: 'Intermediate Education',
      institution: 'Sri Chaitanya Junior Kalasala',
      duration: '2020 - 2022',
      //description: 'Describe your academic achievements, relevant coursework, projects, and any honors or awards received.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <ScrollAnimation />
      <div className="container">
        <h2 className="section-title section-title-animation">
          Education
        </h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="education-card fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <h3 className="degree-title">{edu.degree}</h3>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="separator">•</span>
                <span className="duration">{edu.duration}</span>
              </div>
              <p className="description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;