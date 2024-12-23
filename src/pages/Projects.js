import React, { useState } from 'react';
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionGridItem = motion(GridItem);

// ProjectCard Component
const ProjectCard = ({ title, description, screenshots, index, onClick }) => (
  <MotionGridItem
    bg="#2D2D2D"
    padding="15px"
    borderRadius="10px"
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
    minHeight="200px"
    initial={{ opacity: 0, x: index % 2 === 0 ? '-100vw' : '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)' }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 50, duration: 1 + index * 0.2 }}
    cursor="pointer"
    onClick={onClick}
  >
    <Heading as="h4" size="sm" color="#9dd5d4" mb={2}>
      {title}
    </Heading>
    <Text fontSize="sm">{description}</Text>
    {screenshots?.length > 0 && (
      <Box mt={2}>
        <Box
          as="img"
          src={screenshots[0]}
          alt={`Screenshot of ${title}`}
          borderRadius="5px"
          maxWidth="100%"
        />
      </Box>
    )}
  </MotionGridItem>
);

// IndividualProjects Component
const IndividualProjects = ({ projects, onProjectClick }) => (
  <Box>
    <Heading as="h3" size="lg" mb={3} color="#800080">
      Individual Projects
    </Heading>
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4} mb={8}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} onClick={() => onProjectClick(project)} />
      ))}
    </Grid>
  </Box>
);

// GroupProjects Component
const GroupProjects = ({ projects, onProjectClick }) => (
  <Box>
    <Heading as="h3" size="lg" mb={3} color="#800080">
      Group Projects
    </Heading>
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} onClick={() => onProjectClick(project)} />
      ))}
    </Grid>
  </Box>
);

// Main Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const individualProjects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing skills and projects.',
      techStack: ['React', 'Chakra UI', 'Framer Motion'],
      features: ['Responsive Design', 'Interactive Animations'],
      challenges: 'Ensuring cross-browser compatibility.',
      solution: 'Used modern CSS techniques and testing tools.',
      screenshots: ['portfolio.png'],
      links: { demo: 'https://portfolio-demo.com', github: 'https://github.com/portfolio' },
    },
    {
      title: 'Weather App',
      description: 'A weather app with real-time forecasts using OpenWeather API.',
      techStack: ['React', 'API Integration', 'CSS Grid'],
      features: ['Real-time Forecasts', 'Custom Weather Icons'],
      challenges: 'Handling API rate limits.',
      solution: 'Implemented caching to reduce API calls.',
      screenshots: ['weather.png'],
      links: { demo: 'https://weather-app-demo.com', github: 'https://github.com/weather-app' },
    },
    
    // Add more projects as needed
  ];

  const groupProjects = [
    {
      title: 'Restaurant Table Booking App',
      description: 'A group project to create a fully functional e-commerce site to Book/Reserve a Table in a Restaurant.',
      techStack: ['Node.js', 'Express', 'MongoDB'],
      features: ['Real-time Table Availability', 'User Authentication'],
      challenges: 'Synchronizing reservations in real-time.',
      solution: 'Implemented WebSocket for real-time updates.',
      screenshots: ['ecommerce.png'],
      links: { demo: 'https://restaurant-demo.com', github: 'https://github.com/restaurant-app' },
    },
  ];

  return (
    <Box padding="5%" backgroundColor="black" color="white" minHeight="100vh">
      <Heading as="h2" size="xl" mb={5} textAlign="center" color="#9dd5d4">
        Projects
      </Heading>
      <IndividualProjects projects={individualProjects} onProjectClick={handleProjectClick} />
      <Divider borderColor="#9dd5d4" my={5} />
      <GroupProjects projects={groupProjects} onProjectClick={handleProjectClick} />

      {/* Modal for Project Details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="lg">
        <ModalOverlay />
        <ModalContent backgroundColor="#2D2D2D" color="white">
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}><strong>Description:</strong> {selectedProject?.description}</Text>
            <Text mb={4}><strong>Tech Stack:</strong> {selectedProject?.techStack.join(', ')}</Text>
            <Text mb={4}>
              <strong>Key Features:</strong>
              <UnorderedList mt={2}>
                {selectedProject?.features.map((feature, index) => (
                  <ListItem key={index}>{feature}</ListItem>
                ))}
              </UnorderedList>
            </Text>
            <Text mb={4}>
              <strong>Challenges Faced and Solutions:</strong> {selectedProject?.challenges} <br />
              <strong>Solution:</strong> {selectedProject?.solution}
            </Text>
            <Text mb={4}>
              <strong>Screenshots/Demo Links:</strong>
              <UnorderedList mt={2}>
                {selectedProject?.screenshots.map((screenshot, index) => (
                  <ListItem key={index}>
                    <Image src={screenshot} alt={`Screenshot of ${selectedProject?.title}`} borderRadius="10px" mb={2} />
                  </ListItem>
                ))}
                {selectedProject?.links && (
                  <>
                    <ListItem><Link href={selectedProject.links.demo} color="teal.300" isExternal>Live Demo</Link></ListItem>
                    <ListItem><Link href={selectedProject.links.github} color="teal.300" isExternal>GitHub Repository</Link></ListItem>
                  </>
                )}
              </UnorderedList>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Projects;
