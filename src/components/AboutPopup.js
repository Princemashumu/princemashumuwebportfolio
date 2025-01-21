import React, { useState } from 'react';
import { Box, Heading, Button, VStack, Flex, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProfileimangeSection from './ProfileImageSection';


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

const AboutComponent = () => {
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

  // Gradient for card background
  const cardBgGradient = useColorModeValue(
    "linear(to-r, purple.50, pink.50)", // Light mode gradient
    "linear(to-r, gray.800, gray.900)"  // Dark mode gradient
  );

  const textColor = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("purple.300", "purple.600");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      padding="2rem"
      gap="1rem"
    >
      {/* Heading and Description */}
      <Heading
        as="h2"
        fontSize="2xl"
        mb={4}
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        About Me
      </Heading>
 

     {/* Profile Image Centered */}
     <Box display="flex" justifyContent="center" alignItems="center" mb={6} left="44%" padding="7rem">
        <ProfileimangeSection />
      </Box>
      <Text fontSize="md" mb={6} color={textColor} paddingTop={"5%"}>
  "Coding is more than just writing lines of code—it's about solving problems, embracing challenges, and continuously learning. <br></br>Every bug you fix and every project you complete is a step forward in your journey to mastery. Keep coding, keep growing!"
</Text>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        backgroundColor={colors.backgroundPrimary}
        color={colors.primaryText}
        p={6}
        borderRadius="lg"
        boxShadow="2xl"
        border="1px solid"
        borderColor={borderColor}
        maxW="800px"
        width="100%"
        mx="auto"
        my={8}
      >
        <Flex justifyContent="space-around" mb={6}>
  <Button
    onClick={() => setSelectedSection('selfReflections')}
    bgGradient={
      selectedSection === 'selfReflections'
        ? "linear(to-r, purple.500, pink.500)" // Gradient for active button
        : "transparent"
    }
    color={selectedSection === 'selfReflections' ? 'white' : colors.primaryText}
    borderRadius="full" // Rounded corners
    px={6} // Horizontal padding
    py={3} // Vertical padding
    fontSize="md"
    fontWeight="medium"
    _hover={{
      bgGradient: "linear(to-r, purple.600, pink.600)", // Gradient on hover
      transform: "scale(1.05)", // Slight scale effect on hover
    }}
    _active={{
      bgGradient: "linear(to-r, purple.700, pink.700)", // Gradient when clicked
    }}
    transition="all 0.3s ease" // Smooth transition for hover effects
  >
    Self-Reflections
  </Button>
  <Button
    onClick={() => setSelectedSection('postProgramGoals')}
    bgGradient={
      selectedSection === 'postProgramGoals'
        ? "linear(to-r, purple.500, pink.500)" // Gradient for active button
        : "transparent"
    }
    color={selectedSection === 'postProgramGoals' ? 'white' : colors.primaryText}
    borderRadius="full" // Rounded corners
    px={6} // Horizontal padding
    py={3} // Vertical padding
    fontSize="md"
    fontWeight="medium"
    _hover={{
      bgGradient: "linear(to-r, purple.600, pink.600)", // Gradient on hover
      transform: "scale(1.05)", // Slight scale effect on hover
    }}
    _active={{
      bgGradient: "linear(to-r, purple.700, pink.700)", // Gradient when clicked
    }}
    transition="all 0.3s ease" // Smooth transition for hover effects
  >
    Post-Program Goals
  </Button>
  <Button
    onClick={() => setSelectedSection('facilitatorsFeedback')}
    bgGradient={
      selectedSection === 'facilitatorsFeedback'
        ? "linear(to-r, purple.500, pink.500)" // Gradient for active button
        : "transparent"
    }
    color={selectedSection === 'facilitatorsFeedback' ? 'white' : colors.primaryText}
    borderRadius="full" // Rounded corners
    px={6} // Horizontal padding
    py={3} // Vertical padding
    fontSize="md"
    fontWeight="medium"
    _hover={{
      bgGradient: "linear(to-r, purple.600, pink.600)", // Gradient on hover
      transform: "scale(1.05)", // Slight scale effect on hover
    }}
    _active={{
      bgGradient: "linear(to-r, purple.700, pink.700)", // Gradient when clicked
    }}
    transition="all 0.3s ease" // Smooth transition for hover effects
  >
    Facilitators' Feedback
  </Button>
</Flex>
        {/* Render the selected section */}
        <Box
          p={5}
          borderRadius="md"
          borderColor={borderColor}
          borderWidth={1}
          borderRight={`10px solid ${colors.accent}`} // Custom purple border on the right
          borderBottom={`10px solid ${colors.accent}`} // Custom purple border on the bottom
          boxShadow="lg"
          bgGradient={cardBgGradient}
          color={textColor}
        >
          {sections[selectedSection]}
        </Box>
      </MotionBox>
    </Box>
  );
};

export default AboutComponent;