import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stack items vertically on mobile
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#333',
        color: '#fff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        gap: 1, // Gap between items
        mt: 8, // Margin top to add space from the content above
        [theme.breakpoints.down('sm')]: {
          padding: '1rem', // Adjust padding for smaller screens
          
        },
      }}
    >
      <Typography variant="body2" sx={{ marginRight: 2 }}>
        Contact: +91 8421574875
      </Typography>
      <Typography variant="body2">
        Email: shubhamahirrao.cyber@gmail.com
      </Typography>
    </Box>
  );
};

export default Footer;
