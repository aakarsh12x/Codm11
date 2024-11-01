// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #333;
  color: #ffffff;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #ffffff;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; By AAKARSH SINGH. All rights reserved.</p>
      <div>
        <FooterLink href="#privacy">Privacy Policy</FooterLink>
        <FooterLink href="#terms">Terms of Service</FooterLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
