// src/components/FeaturesSection.js
import React from 'react';
import styled from 'styled-components';
import img1 from '../images/img1.jpg'; // Import custom images
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const FeaturesContainer = styled.div`
  padding: 4rem;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
`;

const FeatureItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

const Icon = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const FeaturesSection = () => {
  const features = [
    { icon: img1, title: 'Job Matching', description: 'Get matched with jobs.' },
    { icon: img2, title: 'Skill Development', description: 'Build skills that matter.' },
    { icon: img3, title: 'Community Support', description: 'Connect with peers.' },
  ];

  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <Icon src={feature.icon} alt={feature.title} />
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
        </FeatureItem>
      ))}
    </FeaturesContainer>
  );
};

export default FeaturesSection;
