// src/components/TestimonialsSection.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  padding: 4rem;
  background-color: #f7f9fc;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  max-width: 300px;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Quote = styled.p`
  color: #555;
  font-style: italic;
`;

const Author = styled.h4`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
`;

const TestimonialsSection = () => {
  const testimonials = [
    { quote: 'This platform helped me land my dream job!', author: 'Alice' },
    { quote: 'The resources and community are unmatched.', author: 'Bob' },
  ];

  return (
    <TestimonialsContainer>
      <h2>What Our Users Say</h2>
      <TestimonialGrid>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i}>
            <Quote>{t.quote}</Quote>
            <Author>- {t.author}</Author>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
