import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

// Define keyframes for the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the hero section with background image
const HeroSection = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: 'url(https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  textAlign: 'center',
  animation: `${fadeIn} 2s ease-in-out`,
  // Add overlay
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Blackish overlay with 50% opacity
    zIndex: 1,
  },
  // Responsive design
  '@media (max-width: 768px)': {
    height: '80vh', // Adjust height on smaller screens
  },
  '@media (max-width: 480px)': {
    height: '60vh', // Further adjust height on very small screens
  },
});

// Styled container for the text content
const ContentContainer = styled(Box)({
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '100%',
  position: 'relative',
  zIndex: 2,
  // Responsive design
  '@media (max-width: 768px)': {
    padding: '1.5rem',
  },
  '@media (max-width: 480px)': {
    padding: '1rem',
  },
});

const HeroText = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  // Responsive design
  '@media (max-width: 768px)': {
    fontSize: '2.5rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '2rem',
  },
});

const HeroDescription = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '2rem',
  // Responsive design
  '@media (max-width: 768px)': {
    fontSize: '1.25rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '1rem',
  },
});

const HeroButton = styled(Button)({
  color: '#ffffff', // White text color
  border: '2px solid #ffffff', // White curved border
  backgroundColor: 'transparent', // No background
  padding: '0.5rem 2rem',
  fontSize: '1rem',
  borderRadius: '22px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight background on hover
  },
  // Responsive design
  '@media (max-width: 768px)': {
    padding: '0.5rem 1.5rem',
    fontSize: '0.9rem',
  },
  '@media (max-width: 480px)': {
    padding: '0.5rem 1rem',
    fontSize: '0.8rem',
  },
});

const HeroPage = () => {
  return (
    <HeroSection>
      <ContentContainer>
        <HeroText>
          Hi, I am <span style={{ color: '#00bcd4' }}>Shubham</span>
        </HeroText>
        <HeroDescription>
          Welcome to my cybersecurity portfolio! Explore my work in safeguarding digital assets, identifying threats, and strengthening security protocols.
</HeroDescription>
       
      </ContentContainer>
    </HeroSection>
  );
};

export default HeroPage;
