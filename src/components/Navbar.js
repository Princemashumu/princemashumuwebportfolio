import React, { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  IconButton,
  Container,
  Typography,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Download as DownloadIcon } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/letter-p.png';

const NavbarComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const navLinks = ['home', 'projects', 'skills', 'assessments', 'about'];

  const toggleDrawer = useCallback((open) => () => setIsDrawerOpen(open), []);

  const linkStyles = (isActive) => ({
    cursor: 'pointer',
    color: isActive ? '#b800ff' : 'skyblue',
    textDecoration: 'none',
    borderBottom: isActive ? '2px solid purple' : '2px solid transparent',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
    '&:hover': {
      color: '#b800ff',
      borderBottom: '2px solid purple',
    },
  });

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: 'linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', zIndex: 1000 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <img src={logo} alt="Logo" width="30" height="30" style={{ marginRight: 8 }} />
              <Typography variant="h6" sx={{ color: 'white', fontSize: isSmallScreen ? '0.8rem' : '1rem', letterSpacing: '3px', fontFamily: 'Anta, sans-serif', fontWeight: 500 }}>
                MASHUMU
              </Typography>
            </Box>

            {isSmallScreen ? (
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', fontFamily: 'Anta, sans-serif', fontWeight: 400 }}>
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link}
                    to={link} // the ID of the section you want to scroll to
                    smooth={true}
                    duration={500}
                    offset={-60} // adjust to offset the navbar height
                    spy={true}
                    activeClass="active"
                  >
                    <Typography component="span" sx={linkStyles(false)}>
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Typography>
                  </ScrollLink>
                ))}
              </Box>
            )}

            {!isSmallScreen && (
              <Tooltip title="Download resume">
                <Button
                  href="https://drive.google.com/file/d/1GkJPUaG0j9Ncxv4fmymH-qtUt8Nd55YW/view?usp=drive_link"
                  target="_blank"
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{ backgroundColor: '#800080', borderRadius: '25px', fontFamily: 'Anta, sans-serif', fontWeight: 400, textTransform: 'none', px: 2, py: 1, fontSize: '0.9rem', '&:hover': { backgroundColor: '#993399' } }}
                >
                  Resume
                </Button>
              </Tooltip>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'purple', fontWeight: 400 } }}>
        <Box sx={{ width: 250, padding: 2 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link}>
                <ScrollLink
                  to={link} // the ID of the section you want to scroll to
                  smooth={true}
                  duration={500}
                  offset={-60} // adjust to offset the navbar height
                  spy={true}
                  activeClass="active"
                >
                  <ListItemText primary={link.charAt(0).toUpperCase() + link.slice(1)} />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarComponent;
