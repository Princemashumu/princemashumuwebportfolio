// Splash.js
import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import logo from '../assets/logo3.png'; // Adjust the path based on the location of your logo file

const Splash = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="linear-gradient(205deg, rgba(0, 98, 128, 0.86),rgba(255, 255, 255, 0.2))"
      zIndex="999" // Ensure it's above other elements
    >
      {/* Circular Loader */}
      <Box
        position="absolute"
        width="50px" // Size of the loader
        height="50px"
        borderRadius="50%"
        border="8px solid purple" // Border color
        borderTop="8px solid transparent" // Transparent top for the spinning effect
        animation="spin 1s linear infinite" // Animation
        zIndex="1000" // Ensure the loader is above the background
        bottom="10%" // Adjust this value to move the loader down
      />
      {/* Logo */}
      <Image src={logo} alt="Splash Logo" width="450px" /> {/* Adjust the logo size as needed */}
      
      {/* Add the CSS for the spinner */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default Splash;
