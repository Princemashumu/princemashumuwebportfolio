import React, { useState } from 'react';
import { Box, Heading, Button, VStack, Flex, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProfileImageSection from './ProfileImageSection';

const colors = {
  backgroundPrimary: 'black',
  primaryText: 'black',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
};

const MotionBox = motion(Box);

const AboutComponent = () => {
  const [selectedSection, setSelectedSection] = useState('selfReflections');

  const sections = {
    selfReflections: (
      <VStack align="start" spacing={4}>
        <Heading as="h3" fontSize="xl" color={colors.accent}>
          Self-Reflections
        </Heading>
        <Text align="start" >
          Reflecting on my journey, I have gained invaluable skills and a deeper understanding of my field. 
          This program has helped me build resilience, foster creativity, and develop a growth mindset.
        </Text>
      </VStack>
    ),
    postProgramGoals: (
      <VStack align="start" spacing={4}>
        <Heading as="h3" fontSize="xl" color={colors.accent}>
          Post-Program Goals
        </Heading>
        <Heading as="h4" fontSize="lg" color={colors.secondaryAccent}>
          Short-Term Goals
        </Heading>
        <List spacing={3} align="start" >
          <ListItem>Secure a role in my desired field.</ListItem>
          <ListItem>Continue building personal projects.</ListItem>
        </List>
      </VStack>
    ),
    facilitatorsFeedback: (
      <VStack align="start" spacing={4}>
        <Heading as="h3" fontSize="xl" color={colors.accent}>
          Feedback from Facilitators
        </Heading>
        <Text>“Your progress has been remarkable.” -Mahlatsi Serathi</Text>
      </VStack>
    ),
  };

  return (
    <Box textAlign="center" padding="2rem" justifyContent="space-between">
     

      {/* Profile Image Centered */}
      <Box display="flex" justifyContent="center" mb={6} paddingBottom="10rem" bottom="2rem">
        <ProfileImageSection />
      </Box>
      
      <Heading
        as="h2"
        fontSize="2xl"
        mb={4}
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
        padding="10rem"
      >
      </Heading>


      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        bg="rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(10px)"
        color={colors.primaryText}
        p={6}
        borderRadius="lg"
        boxShadow="2xl"
        border="1px solid"
        borderColor={colors.border}
        maxW="800px"
        width="100%"
        mx="auto"
        my={8}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-around"
          mb={6}
        >
          {Object.keys(sections).map((key) => (
            <Button
              key={key}
              onClick={() => setSelectedSection(key)}
              bgGradient={
                selectedSection === key ? "linear(to-r, purple.500, pink.500)" : "transparent"
              }
              color={selectedSection === key ? 'white' : colors.primaryText}
              borderRadius="full"
              px={6}
              py={3}
              fontSize="md"
              fontWeight="medium"
              _hover={{
                bgGradient: "linear(to-r, purple.600, pink.600)",
                transform: "scale(1.05)",
              }}
              transition="all 0.3s ease"
              mb={{ base: 2, md: 0 }}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </Button>
          ))}
        </Flex>

        {/* Render the selected section */}
        <Box p={5} borderRadius="md" borderColor={colors.border} borderWidth={1} boxShadow="lg">
          {sections[selectedSection]}
        </Box>
      </MotionBox>
    </Box>
  );
};

export default AboutComponent;
