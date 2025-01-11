import React, { useEffect, useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
import NavbarComponent from './ProjectsNavbar';
import IndividualProjects from './IndividualProjects';
import GroupProjects from './GroupProjects';

// Import the JSON file
import projectsData from './data/projects.json';

const ProjectsPopup = ({ isOpen, onClose }) => {
  const [individualProjects, setIndividualProjects] = useState([]);
  const [groupProjects, setGroupProjects] = useState([]);

  // Fetching the data from the imported JSON
  useEffect(() => {
    if (projectsData) {
      setIndividualProjects(projectsData.individualProjects);
      setGroupProjects(projectsData.groupProjects);
    }
  }, []);

  return (
    isOpen && (
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        bg="gray.900"
        color="white"
        zIndex={1050}
        overflowY="auto"
        p={4}
      >
        <NavbarComponent />
        <IndividualProjects projects={individualProjects} />
        <GroupProjects projects={groupProjects} />
        <Button
          onClick={onClose}
          bg='#800080'
          color="white"
          size="lg"
          mt={6}
          mx="auto"
          display="block"
          _hover={{
            bg:  'purple.600',
          }}
          _active={{
            bg: '#800080',
          }}
          borderRadius="full"
          px={8}
        >
          Close
        </Button>
      </Box>
    )
  );
};

export default ProjectsPopup;
