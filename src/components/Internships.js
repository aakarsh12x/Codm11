// src/components/Internships.js
import React from 'react';
import './Internships.css';

const Internships = () => {
  return (
    <section className="internships">
      <h2>Internships</h2>
      <div className="internship-list">
        <div className="internship-card">Web Development</div>
        <div className="internship-card">Data Science</div>
        <div className="internship-card">Marketing</div>
        <div className="internship-card">UI/UX Design</div>
      </div>
    </section>
  );
};

export default Internships;
