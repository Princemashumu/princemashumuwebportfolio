// src/pages/Projects.js
import React from 'react';
import { Box, SimpleGrid, Heading, Text, Image, Link, Stack } from '@chakra-ui/react';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather forecasting app using React and OpenWeather API.',
    imageUrl: 'path-to-weather-app-image',
    link: 'https://github.com/yourusername/weather-app',
  },
  {
    title: 'Shopping List App',
    description: 'A shopping list management app with Redux for state management.',
    imageUrl: 'path-to-shopping-app-image',
    link: 'https://github.com/yourusername/shopping-list-app',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5} textAlign="center">
        My Projects
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={project.imageUrl} alt={project.title} mb={4} />
            <Stack spacing={3}>
              <Heading as="h3" size="md">{project.title}</Heading>
              <Text>{project.description}</Text>
              <Link href={project.link} color="teal.500" isExternal>
                View on GitHub
              </Link>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
