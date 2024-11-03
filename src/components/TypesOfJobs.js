// src/components/TypesOfJobs.js
import React from 'react';
import './TypesOfJobs.css'; // Make sure to style and add animations in CSS or use libraries like Framer Motion

const TypesOfJobs = () => {
  return (
    <section className="types-of-jobs">
      <h2>Types of Jobs</h2>
      <div className="job-cards">
        <div className="job-card">Full-Time</div>
        <div className="job-card">Part-Time</div>
        <div className="job-card">Remote</div>
        <div className="job-card">Freelance</div>
      </div>
    </section>
  );
};

export default TypesOfJobs;
