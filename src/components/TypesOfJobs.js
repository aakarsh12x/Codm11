import React from 'react';
import './TypesOfJobs.css'; // Ensure animations and styling in CSS

const jobTypes = [
  { label: 'Full-Time', icon: '💼' },
  { label: 'Part-Time', icon: '⏳' },
  { label: 'Remote', icon: '🏠' },
  { label: 'Freelance', icon: '🌐' },
];

const TypesOfJobs = () => {
  return (
    <section className="types-of-jobs">
      <h2>Types of Jobs</h2>
      <div className="job-cards">
        {jobTypes.map((job, index) => (
          <div className="job-card" key={index}>
            <span className="job-icon" role="img" aria-label={job.label}>
              {job.icon}
            </span>
            <p>{job.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesOfJobs;
