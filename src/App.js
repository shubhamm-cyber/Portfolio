import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import Profile from './Components/Aboutme';
import SkillSection from './Components/Skills';
import PortfolioSection from './Components/Portfolio';
import React, { useRef } from 'react';
import Footer from './Components/Footer';

const MainComponent = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);

  const refs = {
    heroRef,
    profileRef,
    skillRef,
    portfolioRef
  };

  return (
    <div>
      <Navbar refs={refs} />
      <div ref={heroRef}><HeroSection /></div>
      <div ref={profileRef}><Profile /></div>
      <div ref={skillRef}><SkillSection /></div>
      <div ref={portfolioRef}><PortfolioSection /></div>
      <div ref={footerRef} sx><Footer/></div>
      
    </div>
  );
};

export default MainComponent;
