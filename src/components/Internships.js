import React from 'react';
import './Internships.css';

const internshipTypes = [
  { label: 'Web Development', icon: '💻' },
  { label: 'Data Science', icon: '📊' },
  { label: 'Marketing', icon: '📈' },
  { label: 'UI/UX Design', icon: '🎨' },
];

const Internships = () => {
  return (
    <section className="internships">
      <h2>Internships</h2>
      <div className="internship-list">
        {internshipTypes.map((internship, index) => (
          <div className="internship-card" key={index}>
            <span className="internship-icon" role="img" aria-label={internship.label}>
              {internship.icon}
            </span>
            <p>{internship.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
