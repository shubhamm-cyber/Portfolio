import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ refs }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    handleMenuClose(); // Close the menu after clicking
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
        <Toolbar sx={{ position: 'relative' }}>
          {/* Navigation Items */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, marginLeft: 'auto' }}>
            {!isMobile && (
              <>
                <Button color="inherit" sx={{ fontFamily: 'Poppins', marginRight: 2 }} onClick={() => scrollToSection(refs.heroRef)}>Home</Button>
                <Button color="inherit" sx={{ fontFamily: 'Poppins', marginRight: 2 }} onClick={() => scrollToSection(refs.profileRef)}>Profile</Button>
                <Button color="inherit" sx={{ fontFamily: 'Poppins', marginRight: 2 }} onClick={() => scrollToSection(refs.skillRef)}>Skills</Button>
                <Button color="inherit" sx={{ fontFamily: 'Poppins', marginRight: 2 }} onClick={() => scrollToSection(refs.portfolioRef)}>Portfolio</Button>
              </>
            )}
          </Box>

          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ position: 'absolute', right: 20 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Menu for Mobile */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => scrollToSection(refs.heroRef)} sx={{ fontFamily: 'Poppins' }}>Home</MenuItem>
            <MenuItem onClick={() => scrollToSection(refs.profileRef)} sx={{ fontFamily: 'Poppins' }}>Profile</MenuItem>
            <MenuItem onClick={() => scrollToSection(refs.skillRef)} sx={{ fontFamily: 'Poppins' }}>Skills</MenuItem>
            <MenuItem onClick={() => scrollToSection(refs.portfolioRef)} sx={{ fontFamily: 'Poppins' }}>Portfolio</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
