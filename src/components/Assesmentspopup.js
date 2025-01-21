import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const AssesmentsComponent = () => {
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
      <Heading
        as="h2"
        fontSize="2xl"
        mb="2"
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Assessments
      </Heading>
      
      <Text fontSize="md" color="gray.600" mb="4">
  These assessments showcase my dedication, growth, and passion for continuous learning. <br></br>Each one represents a step forward in my journey of mastering new skills.
</Text>

      
      <Flex gap="1rem" width="100%" alignItems="flex-start">
        <Box 
          flex="1"
          height="400px" 
          backgroundColor="purple.500" 
          display="flex" 
          alignItems="flex-start" 
          justifyContent="space-between"
          padding="1rem"
          borderRadius="md"
          color="white"
        >
          <Text fontWeight="bold"
          bgGradient="linear(to-r, purple.500, pink.500)"
          color="white"
          borderRadius="full"
          px={4}
          py={1}
          fontSize="sm"
          >Assessment 1</Text>
          <Text
          fontWeight="bold"
          bgGradient="linear(to-r, purple.500, pink.500)"
          color="white"
          borderRadius="full"
          px={4}
          py={1}
          fontSize="sm"
          >ReactJS</Text>
        </Box>
        <Box 
          flex="1"
          height="400px" 
          backgroundColor="pink.500" 
          display="flex" 
          alignItems="flex-start" 
          justifyContent="space-between"
          padding="1rem"
          borderRadius="md"
          color="white"
        >
          <Text fontWeight="bold"
          bgGradient="linear(to-r, purple.500, pink.500)"
          color="white"
          borderRadius="full"
          px={4}
          py={1}
          fontSize="sm">Assessment 2</Text>
          <Text 
          fontWeight="bold"
          bgGradient="linear(to-r, purple.500, pink.500)"
          color="white"
          borderRadius="full"
          px={4}
          py={1}
          fontSize="sm">React Native</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AssesmentsComponent;
