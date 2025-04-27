import React from 'react';
import './Skills.css';

const Skills = () => {
  // Define different skill categories
  const programmingSkills = [
    { name: "Flutter" },
    { name: "Java" },
    { name: "React.js" }
  ];
  
  const backendSkills = [
    { name: "Spring Boot" },
    { name: "Firebase" },
    { name: "PostgreSQL" }
  ];
  
  const toolsSkills = [
    { name: "Git" },
    { name: "GCP" },
    { name: "CI/CD" }
  ];



  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My Skills
        </h2>
        <div className="skills-categories">
          <div className="category-column">
            <h3 className="category-heading">App & Frontend Development</h3>
            <div className="skills-list">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-card frontend">
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="category-column">
            <h3 className="category-heading">Backend & Database</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-card backend">
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="category-column">
            <h3 className="category-heading">Tools & DevOps</h3>
            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="skill-card tools">
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;