import React, { useState } from 'react';
import NavbarComponent from './AboutNavbar';
import { Box, Heading, Button, VStack, Flex, Text, List, ListItem} from '@chakra-ui/react';
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
  const [selectedSection, setSelectedSection] = useState('selfReflections');

  const sections = {
    selfReflections: (
      <VStack align="start" spacing={4}>
        <Heading
          as="h3"
          fontSize="xl"
          color={colors.accent}
          cursor="pointer"
          onClick={() => setSelectedSection('selfReflections')}
        >
          Self-Reflections
        </Heading>
        <Text>
          Reflecting on my journey, I have gained invaluable skills and a deeper understanding of my field. This program has
          helped me build resilience, foster creativity, and develop a growth mindset.
        </Text>
        <Text>
          I have also learned to embrace challenges as opportunities for growth and to collaborate effectively within diverse teams.
        </Text>
      </VStack>
    ),
    postProgramGoals: (
      <VStack align="start" spacing={4}>
        <Heading
          as="h3"
          fontSize="xl"
          color={colors.accent}
          cursor="pointer"
          onClick={() => setSelectedSection('postProgramGoals')}
        >
          Post-Program Goals
        </Heading>
        <Heading as="h4" fontSize="lg" color={colors.secondaryAccent}>
          Short-Term Goals
        </Heading>
        <List spacing={3}>
          <ListItem>Secure a role in my desired field to apply my newly acquired skills.</ListItem>
          <ListItem>Continue building personal projects to enhance my portfolio.</ListItem>
          <ListItem>Network with professionals to expand my career opportunities.</ListItem>
        </List>
        <Heading as="h4" fontSize="lg" color={colors.secondaryAccent}>
          Long-Term Goals
        </Heading>
        <List spacing={3}>
          <ListItem>Become an expert in my domain and mentor aspiring professionals.</ListItem>
          <ListItem>Establish a startup focused on innovative solutions.</ListItem>
          <ListItem>Contribute to open-source projects and give back to the community.</ListItem>
        </List>
      </VStack>
    ),
    facilitatorsFeedback: (
      <VStack align="start" spacing={4}>
        <Heading
          as="h3"
          fontSize="xl"
          color={colors.accent}
          cursor="pointer"
          onClick={() => setSelectedSection('facilitatorsFeedback')}
        >
          Feedback from Facilitators
        </Heading>
        <Text>
          “Your progress has been remarkable, and your enthusiasm for learning is evident in your work. Keep pushing the boundaries.”
        </Text>
        <Text>
          “You’ve demonstrated a strong ability to adapt and overcome challenges. Your commitment will undoubtedly lead to great
          achievements.”
        </Text>
      </VStack>
    ),
  };

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
        backgroundColor={colors.backgroundPrimary}
        color={colors.primaryText}
        zIndex="1050"
        overflowY="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <NavbarComponent />
        <Box
          position="relative"
          top="50px"
          width="90%"
          maxWidth="800px"
          p={5}
        >
          {/* Navigation Buttons */}
          <Flex justifyContent="space-around" mb={6}>
            <Button
              onClick={() => setSelectedSection('selfReflections')}
              bg={selectedSection === 'selfReflections' ? colors.linkBg : 'transparent'}
              color={selectedSection === 'selfReflections' ? 'white' : colors.primaryText}
              _hover={{
                bg: colors.linkBgHover,
              }}
            >
              Self-Reflections
            </Button>
            <Button
              onClick={() => setSelectedSection('postProgramGoals')}
              bg={selectedSection === 'postProgramGoals' ? colors.linkBg : 'transparent'}
              color={selectedSection === 'postProgramGoals' ? 'white' : colors.primaryText}
              _hover={{
                bg: colors.linkBgHover,
              }}
            >
              Post-Program Goals
            </Button>
            <Button
              onClick={() => setSelectedSection('facilitatorsFeedback')}
              bg={selectedSection === 'facilitatorsFeedback' ? colors.linkBg : 'transparent'}
              color={selectedSection === 'facilitatorsFeedback' ? 'white' : colors.primaryText}
              _hover={{
                bg: colors.linkBgHover,
              }}
            >
              Facilitators' Feedback
            </Button>
          </Flex>

          {/* Render the selected section */}
          <Box p={5} borderRadius="md" borderColor={colors.border} borderWidth={1}
  borderRight={`10px solid purple`} // Custom purple border on the right
  borderBottom={`10px solid purple`} boxShadow="lg">
            {sections[selectedSection]}
          </Box>

          {/* Close Button */}
          <Box textAlign="center" mt={6}>
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
        </Box>
      </MotionBox>
    )
  );
};

export default AboutPopup;
