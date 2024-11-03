import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.8);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const JobTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  gap: 1.5rem;
`;

const JobTypeIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #e0e0e0;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

const IconLabel = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
`;

const JobTypeIcons = () => {
  const jobTypes = [
    { label: 'Full-Time', icon: '💼' },
    { label: 'Part-Time', icon: '⏳' },
    { label: 'Internship', icon: '🎓' },
    { label: 'Remote', icon: '🏠' },
  ];

  return (
    <JobTypeContainer>
      {jobTypes.map((job, index) => (
        <JobTypeIcon key={index}>
          <span style={{ fontSize: '2rem' }}>{job.icon}</span>
          <IconLabel>{job.label}</IconLabel>
        </JobTypeIcon>
      ))}
    </JobTypeContainer>
  );
};

export default JobTypeIcons;
