import React, { useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import categorizedSkills from './data/skills.json';

const iconMap = {
  FaFigma: <FaFigma color="purple" />,
  FaHtml5: <FaHtml5 color="red" />,
  FaCss3Alt: <FaCss3Alt color="blue" />,
  FaJs: <FaJs color="yellow" />,
  FaReact: <FaReact color="cyan" />,
  FaNodeJs: <FaNodeJs color="green" />,
  SiExpress: <SiExpress color="red" />,
  SiMongodb: <SiMongodb color="cyan" />,
};

const colors = {
  backgroundPrimary: 'rgb(23,25,35)', // Main background remains the same
  primaryText: 'white',
  accent: '#800080',
};

const MotionBox = motion(Box);

const SkillsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Gradient for card background (removed, replaced with black)
  const cardBg = useColorModeValue("gray.100", "black"); // Black for dark mode, light gray for light mode

  const headingColor = useColorModeValue("purple.600", "purple.300");
  const borderColor = useColorModeValue("purple.300", "purple.600");

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      backgroundColor={colors.backgroundPrimary}
      color={colors.primaryText}
      p={5}
      minH="100vh"
    >
      <Box textAlign="center" mb={6}>
        <Heading
          as="h2"
          fontSize="2xl"
          mb={2}
          bgGradient="linear(to-r, purple.400, pink.400)"
          bgClip="text"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Skills Matrix
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Embark on a journey through my technical and creative expertise, where innovation meets passion.
        </Text>
      </Box>
      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {Object.keys(categorizedSkills).map((category) => (
          <MotionBox
            key={category}
            p={8}
            minH="150px"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="0px 4px 10px rgba(128, 0, 128, 0.5)" // Purple shadow
            backgroundColor={cardBg} // Black background for boxes
            textAlign="center"
            cursor="pointer"
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            border="1px solid"
            borderColor={borderColor}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="md" color={headingColor}>
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </Heading>
          </MotionBox>
        ))}
      </SimpleGrid>
      {selectedCategory && (
        <>
          <Divider my={6} borderColor="purple.500" />
          <Heading size="md" mb={4} color={headingColor}>
            {selectedCategory.replace(/([A-Z])/g, ' $1').trim()}
          </Heading>
          <SimpleGrid columns={[2, 3, 4]} spacing={6}>
            {categorizedSkills[selectedCategory].map((skill) => (
              <MotionBox
                key={skill.skill}
                p={8}
                minH="150px"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="0px 4px 10px rgba(128, 0, 128, 0.5)" // Purple shadow
                backgroundColor={cardBg} // Black background for boxes
                textAlign="center"
                cursor="pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                border="1px solid"
                borderColor={borderColor}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                {React.cloneElement(iconMap[skill.icon] || <Box>🔧</Box>, { size: 48 })}
                <Text mt={4} fontWeight="bold"
                  bgGradient="linear(to-r, purple.500, pink.500)"
                  color="white"
                  borderRadius="full"
                  px={4}
                  py={2}
                  fontSize="md"
                >
                  {skill.skill}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </>
      )}
    </MotionBox>
  );
};

export default SkillsComponent;