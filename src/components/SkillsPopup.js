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
import Lottie from 'lottie-react';
import animationData1 from '../assets/anime1.json';
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
  backgroundPrimary: 'rgb(23,25,35)',
  primaryText: 'white',
  accent: '#800080',
};

const MotionBox = motion(Box);

const SkillsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Gradient for card background
  const cardBgGradient = useColorModeValue(
    "linear(to-r, purple.50, pink.50)", // Light mode gradient
    "linear(to-r, gray.800, gray.900)"  // Dark mode gradient
  );

  const textColor = useColorModeValue("gray.700", "gray.200");
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
        <Text fontSize="lg" color="gray.300">
          Explore my technical and creative skills by category.
        </Text>
      </Box>
      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {Object.keys(categorizedSkills).map((category) => (
          <MotionBox
            key={category}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bgGradient={cardBgGradient}
            textAlign="center"
            cursor="pointer"
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            border="1px solid"
            borderColor={borderColor}
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
                p={5}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="lg"
                bgGradient={cardBgGradient}
                textAlign="center"
                cursor="pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                border="1px solid"
                borderColor={borderColor}
              >
                {React.cloneElement(iconMap[skill.icon] || <Box>🔧</Box>, { size: 48 })}
                <Text mt={2} fontSize="sm" color={textColor}>
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