// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Global Styles for Font Import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff; /* Light background color */
  color: #333; /* Dark text for contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slightly more prominent shadow */
  font-family: 'Poppins', sans-serif; /* Modern font */
`;

const Logo = styled.a`
  font-size: 2.0rem;
  font-weight: 700;
  color: #007bff; /* Primary color for logo */
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3; /* Darker shade on hover */
  }
`;

const NavLinks = styled.nav`
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 100%;
    position: absolute;
    top: 60px; /* Adjust based on header height */
    left: 0;
    background-color: #ffffff; /* Match header background */
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for dropdown */
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  color: #333; /* Dark color for links */
  text-decoration: none;
  font-weight: 500; /* Medium weight for better readability */
  transition: color 0.3s;
  padding: 0.5rem 1rem; /* Increased padding for better click area */
  border-radius: 5px; /* Rounded corners */
  
  &:hover {
    background-color: #007bff; /* Background color on hover */
    color: #ffffff; /* White text on hover */
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
  }
`;

const MenuToggle = styled.button`
  display: none;
  font-size: 1.5rem;
  color: #333; /* Dark color for menu icon */
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Logo href="/">JobsOnGo</Logo>
        <MenuToggle onClick={toggleMenu}>{isOpen ? '✕' : '☰'}</MenuToggle>
        <NavLinks isOpen={isOpen}>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </HeaderContainer>
    </>
  );
};

export default Header;
