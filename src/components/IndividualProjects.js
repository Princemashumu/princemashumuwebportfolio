import React, { useState } from 'react';
import { Box, SimpleGrid, Card, CardBody, CardFooter, Link, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const IndividualProjects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current starting index
  const itemsPerPage = 3; // Number of projects to show at a time

  // Calculate the projects to display
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  // Handlers for arrows
  const handleNext = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div style={{ paddingTop: '1%' }}>
      <h3
        style={{ justifyContent: 'center', textAlign: 'center', color: '#b600fc' }}
      >
        Individual Projects
      </h3>
      <Box display="flex" alignItems="center" justifyContent="center" gap="10px">
        {/* Left Arrow */}
        <IconButton
          aria-label="Previous"
          icon={<ArrowLeftIcon />}
          onClick={handlePrev}
          isDisabled={currentIndex === 0} // Disable if at the beginning
        />
        {/* Projects Grid */}
        <SimpleGrid columns={[1, 2, 3]} spacing={8} padding="20px">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ margin: '10px' }}
            >
              <Box boxShadow="md" borderRadius="md" overflow="hidden">
                <Card>
                  <CardBody>
                    <h4>{project.title}</h4>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <p><strong>Challenges:</strong> {project.challenges}</p>
                  </CardBody>
                  <CardFooter>
                    <Link href={project.link} isExternal color="purple.500">
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
        {/* Right Arrow */}
        <IconButton
          aria-label="Next"
          icon={<ArrowRightIcon />}
          onClick={handleNext}
          isDisabled={currentIndex + itemsPerPage >= projects.length} // Disable if at the end
        />
      </Box>
    </div>
  );
};

export default IndividualProjects;
