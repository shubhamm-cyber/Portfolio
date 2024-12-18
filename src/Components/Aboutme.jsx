import React from 'react';
import { Grid, Typography, Paper, Button } from '@mui/material';

const Profile = () => {
  return (
    <Paper 
      sx={{ 
        padding: 3, 
        maxWidth: 600, 
        margin: 'auto', 
        display: 'flex', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 100%)', // Gradient background
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)',  // Strong shadow for a card effect
        borderRadius: '12px',  // Rounded corners
        overflow: 'hidden'  // Hide overflow for rounded corners
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              border: '5px solid #00bcd4',  // Border color for a modern touch
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)', // Shadow around image
              objectFit: 'cover'  // Ensure the image covers the entire area
            }}
          />
        </Grid>
        <Grid item xs>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'flex-start',  // Align text to the start
            height: '100%', 
            padding: '0 16px'  // Added padding for spacing
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                marginBottom: 1, 
                color: '#ffffff', 
                fontSize: '2rem',
                fontWeight: '600',  // Semi-bold font
                textTransform: 'capitalize',  // Capitalize text for a clean look
                letterSpacing: '0.5px'  // Slightly increased letter spacing
              }}
            >
              Shubham Ahirrao
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0bec5',  // Light gray text
                fontSize: '1.1rem',
                marginBottom: '8px',  // Spacing between text items
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}
            >
              Contact No: +91 8928669994
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0bec5', 
                fontSize: '1.1rem',
                marginBottom: '8px',  
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}
            >
              Email: shubhamahirrao4444@gmail.com
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0bec5', 
                fontSize: '1.1rem',
                marginBottom: '8px',  
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}
            >
              Language: English, Hindi, Marathi
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0bec5', 
                fontSize: '1.1rem',
                marginBottom: '8px',  
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}
            >
              From: Nashik, Maharashtra, India
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              href="/path/to/your/cv.pdf" // Replace with your CV file path
              download
              sx={{ 
                marginTop: 2,  // Spacing above the button
                borderRadius: '8px',  // Rounded corners for the button
                padding: '10px 20px',  // Adjust padding
                fontSize: '1rem',
                textTransform: 'none',  // Default text transform
                backgroundColor: '#00bcd4',  // Primary color for button
                '&:hover': {
                  backgroundColor: '#0097a7'  // Darker shade on hover
                }
              }}
            >
              Download CV
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
