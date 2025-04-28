import React from 'react';
import './Skills.css';
import { FaReact, FaJava, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiSpringboot, SiFirebase, SiPostgresql, SiGooglecloud } from 'react-icons/si';
import { BsGearFill } from 'react-icons/bs';

const Skills = () => {
  // Define different skill categories with icons
  const programmingSkills = [
    { name: "Flutter", icon: <SiFlutter className="skill-icon" /> },
    { name: "Java", icon: <FaJava className="skill-icon" /> },
    { name: "React.js", icon: <FaReact className="skill-icon" /> }
  ];
  
  const backendSkills = [
    { name: "Spring Boot", icon: <SiSpringboot className="skill-icon" /> },
    { name: "Firebase", icon: <SiFirebase className="skill-icon" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon" /> }
  ];
  
  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
    { name: "GCP", icon: <SiGooglecloud className="skill-icon" /> },
    { name: "CI/CD", icon: <BsGearFill className="skill-icon" /> },
    { name: "Docker", icon: <FaDocker className="skill-icon" /> }
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
                  {skill.icon}
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
                  {skill.icon}
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
                  {skill.icon}
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