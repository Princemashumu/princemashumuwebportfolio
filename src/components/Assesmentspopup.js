import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from './AssesmentsNavbar';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const colors = {
  backgroundPrimary: 'black.900',
  primaryText: 'white',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
};

const MotionBox = motion(Box);

const AssesmentsPopup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        backgroundColor=' rgb(23,25,35)'
        color={colors.primaryText}
        zIndex="1050"
        overflowY="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <NavbarComponent />
        <Box maxWidth="90%" p="5" textAlign="center" position="relative">
         
          <Heading as="h2" fontSize="2xl" mb="4">
            Skills
          </Heading>
          <Text fontSize="lg" mb="6">
            This is where you can showcase your Assesments. Now displayed fullscreen!
          </Text>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </MotionBox>
    )
  );
};

export default AssesmentsPopup;
