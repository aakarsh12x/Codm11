// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import desknerd from '../images/desknerd.jpg'; // Import your image

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: #f0f4f8;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #2d2d2d;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #4a4a4a;
  margin: 1rem 0;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const HeroImage = styled.img`
  max-width: 500px;
  width: 100%;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <Heading>Join the Future of Tech Careers</Heading>
        <Description>
          Build skills, find job opportunities, and become part of a growing community.
        </Description>
        <Button href="#get-started">Get Started</Button>
      </HeroText>
      <HeroImage src={desknerd} alt="Hero Image" />
    </HeroContainer>
  );
};

export default HeroSection;
