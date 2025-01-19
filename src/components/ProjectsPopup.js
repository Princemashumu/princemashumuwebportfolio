import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import IndividualProjects from './IndividualProjects';
import GroupProjects from './GroupProjects';

// Import the JSON file
import projectsData from './data/projects.json';

const Projects = () => {
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
    <Box
      width="100%"
      minHeight="100vh"
      bg="gray.900"
      color="white"
      p={4}
      paddingLeft={"5%"}
    >
      <Box maxWidth="1200px" margin="0 auto">
        <IndividualProjects projects={individualProjects} />
        <GroupProjects projects={groupProjects} />
      </Box>
    </Box>
  );
};

export default Projects;