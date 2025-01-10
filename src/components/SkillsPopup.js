import React, { useState } from 'react';
import NavbarComponent from './SkillsNavbar';
import {
  Box,
  Heading,
  Button,
  SimpleGrid,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
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
import categorizedSkills from './data/skills.json'; // Import the JSON data

// Skill-to-icon mapping
const iconMap = {
  FaFigma: <FaFigma color="purple" />,
  FaHtml5: <FaHtml5 color="orange" />,
  FaCss3Alt: <FaCss3Alt color="blue" />,
  FaJs: <FaJs color="yellow" />,
  FaReact: <FaReact color="cyan" />,
  FaNodeJs: <FaNodeJs color="green" />,
  SiExpress: <SiExpress color="white" />,
  SiMongodb: <SiMongodb color="green" />,
};

const colors = {
  backgroundPrimary: 'rgb(23,25,35)',
  primaryText: 'white',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
};

const MotionBox = motion(Box);

const SkillsPopup = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null); // State for selected skill
  const { isOpen: isModalOpen, onOpen, onClose: closeModal } = useDisclosure();

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    onOpen(); // Open the modal
  };

  const renderCategoryBox = (category) => (
    <Box
      key={category}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      p="5"
      backgroundColor="gray.800"
      color="white"
      textAlign="center"
      cursor="pointer"
      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
    >
      <Heading size="md" color="purple.400">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </Heading>
    </Box>
  );

  const renderSkillBox = (skill) => (
    <Box
      key={skill.skill}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      p="5"
      backgroundColor="gray.700"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100px"
      cursor="pointer"
      onClick={() => handleSkillClick(skill)} // Set the selected skill and open modal
    >
      {React.cloneElement(iconMap[skill.icon] || <Box>🔧</Box>, { size: 48 })}
    </Box>
  );

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
        <Box maxWidth="90%" p="5" textAlign="center" zIndex="2" position="relative" top="26%" left="1%">
          <Lottie
            animationData={animationData1}
            loop
            style={{
              position: 'fixed',
              top: '20%',
              left: '15%',
              width: '24%',
              height: '24%',
              zIndex: '1',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <Box textAlign="center" mb="6">
  <Heading as="h2" fontSize="2xl" mb="2" color="purple.400">
    Skills Matrix
  </Heading>
  <Text fontSize="lg" color="gray.300">
    A comprehensive overview of my technical and creative skills. Explore each category to see details about my experience and expertise in various technologies.
  </Text>
</Box>

          <SimpleGrid columns={[1, null, 3]} spacing="8" >
            {Object.keys(categorizedSkills).map((category) =>
              renderCategoryBox(category)
            )}
          </SimpleGrid>
          {selectedCategory && (
            <>
              <Divider my="6" borderColor="purple.500" />
              <Heading size="md" mb="4">
                {selectedCategory.replace(/([A-Z])/g, ' $1').trim()}
              </Heading>
              <SimpleGrid columns={[2, 3, 4]} spacing="6">
                {categorizedSkills[selectedCategory].map((skill) =>
                  renderSkillBox(skill)
                )}
              </SimpleGrid>
            </>
          )}
          <Divider my="8" borderColor="purple.500" />
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Box>
{/* Modal for skill details */}
{selectedSkill && (
  <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
    <ModalOverlay />
    <ModalContent
      bg="gray.800"
      color="white"
      borderRadius="lg"
      boxShadow="2xl"
      overflow="hidden"
    >
      <ModalHeader
        fontSize="2xl"
        fontWeight="bold"
        bgGradient="linear(to-r, purple.500, purple.700)"
        color="white"
        p={4}
      >
        {selectedSkill.skill}
      </ModalHeader>
      <ModalCloseButton color="white" />
      <ModalBody px={6} py={4}>
        <Box
          p={4}
          bg="gray.700"
          borderRadius="md"
          boxShadow="md"
          mb={4}
        >
          <Heading size="sm" mb={2} color="purple.300">
            Level:
          </Heading>
          <Box fontSize="lg">{selectedSkill.level}</Box>
        </Box>
        <Box
          p={4}
          bg="gray.700"
          borderRadius="md"
          boxShadow="md"
        >
          <Heading size="sm" mb={2} color="purple.300">
            Notes:
          </Heading>
          <Box fontSize="lg">{selectedSkill.notes}</Box>
        </Box>
      </ModalBody>
      <ModalFooter
        bg="gray.700"
        display="flex"
        justifyContent="center"
      >
        <Button
          colorScheme="purple"
          size="lg"
          borderRadius="full"
          px={8}
          onClick={closeModal}
        >
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)}
      </MotionBox>
    )
  );
};

export default SkillsPopup;
