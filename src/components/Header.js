// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f9fa; /* Light background color */
  color: #333; /* Dark text for contrast */
`;

const Logo = styled.a`
  font-size: 2.0rem;
  font-weight: bold;
  color: #333; /* Dark color for logo */
  text-decoration: none;
`;

const NavLinks = styled.nav`
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #f8f9fa; /* Match header background */
    padding: 1rem 0;
    text-align: center;
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  color: #333; /* Dark color for links */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: #007bff;
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
  );
};

export default Header;
