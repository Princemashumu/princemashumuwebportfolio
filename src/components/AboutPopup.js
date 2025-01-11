import React from 'react';
import NavbarComponent from './AboutNavbar';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const colors = {
  backgroundPrimary: 'black',
  primaryText: 'white',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
};

const MotionBox = motion(Box);

const AboutPopup = ({ isOpen, onClose }) => {
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
        backgroundColor="rgba(0, 0, 0, 1)"
        color={colors.primaryText}
        zIndex="1050"
        overflowY="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <NavbarComponent />
        <Box maxWidth="90%" p="5" textAlign="center">
          <Heading as="h2" fontSize="2xl" mb="4">
            About Me
          </Heading>
          <Text fontSize="lg" mb="6">
            Here’s some information about you. The popup now fills the viewport!
          </Text>
          {/* Chakra UI Button with consistent styling */}
          <Button
            onClick={onClose}
            bg={colors.accent}
            color="white"
            size="lg"
            borderRadius="full"
            px={8}
            py={4}
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              bg: colors.linkBgHover,
            }}
            _active={{
              bg: colors.linkBg,
            }}
            _focus={{
              outline: 'none',
            }}
          >
            Close
          </Button>
        </Box>
      </MotionBox>
    )
  );
};

export default AboutPopup;
