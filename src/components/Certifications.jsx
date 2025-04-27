import React from 'react';
import './Certifications.css';

const Certifications = () => {
  // Sample certification data - replace with your own
  const certifications = [
    {
      id: 1,
      name: 'Participation Certificate in HackFinit Hackothon',
      issuer: 'BVRIT',
      date: 'April 2025',
      //description: 'Brief description of what you learned and skills acquired.',
      //image: '/path-to-certification-image.jpg',
    },
    {
      id: 2,
      name: 'Postman API Fundamentas Student Expert',
      issuer: 'Postman',
      date: 'Feb 2025',
      //description: 'Brief description of what you learned and skills acquired.',
      //image: '/path-to-certification-image.jpg',
    },
    {
      id: 3,
      name: 'Intenship Completion Certificate from NewTab Technologies',
      issuer: 'NewTab Technologies',
      date: 'Oct 2024',
      //description: 'Brief description of what you learned and skills acquired.',
      //image: '/path-to-certification-image.jpg',
    },
    {
      id: 4,
      name: 'Oracle Academy Certificate (SQL)',
      issuer: 'Oracle Academy',
      date: 'Oct 2024',
      //description: 'Brief description of what you learned and skills acquired.',
      //image: '/path-to-certification-image.jpg',
    },
    {
      id: 5,
      name: 'Smart Coder(DSA)',
      issuer: 'Smart Interviews',
      date: 'Jun 2024',
     // description: 'Brief description of what you learned and skills acquired.',
      //image: '/path-to-certification-image.jpg',
    },
    {
      id: 6,
      name: 'The Joy Of Computing Using Python',
      issuer: 'NPTEL',
      date: 'Oct 2023',
      //description: 'Brief description of what you learned and skills acquired.',
     // image: '/path-to-certification-image.jpg',
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">
          Certifications
        </h2>
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              {/*<div className="certification-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="certification-image"
                />
              </div>*/}
              <div className="certification-content">
                <h3 className="certification-title">{cert.name}</h3>
                <div className="certification-meta">
                  <span className="certification-issuer">{cert.issuer}</span>
                  <span className="meta-separator">•</span>
                  <span className="certification-date">{cert.date}</span>
                </div>
                <p className="certification-description">{cert.description}</p>
                <button className="view-certificate-button">
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;