import React from 'react';
import { Box, Heading, Text, Flex, useColorModeValue, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

const AssesmentsComponent = () => {

  const borderColor = useColorModeValue("purple.300", "purple.600");
  const shadow = useColorModeValue("xl", "2xl");
  const footerBg = useColorModeValue("gray.200", "gray.800");
  const linkColor = useColorModeValue("blue.500", "blue.300"); // Subtle blue for links

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      textAlign="center" 
      padding="2rem"
      gap="1rem"
      bg="#EFF8FF"
      borderRadius="25px"
    >
      <Heading
        as="h3"
        textAlign="center"
        fontSize={{ base: "lg", md: "xl" }}
        mb={4}
        bgGradient="linear(to-r, purple.500, pink.500)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Assessments
      </Heading>
      <Text
       textAlign="center"
       fontSize="sm"
       color="black"
       mb={6}
       letterSpacing="1px"
      >
        Discover more projects that highlight creativity, problem-solving, and technical skills.
      </Text>

      {/* Responsive Flex: Column on Mobile, Row on Desktop */}
      <Flex 
        gap="1rem" 
        width="100%" 
        alignItems="flex-start" 
        flexDirection={{ base: "column", md: "row" }} // Stack on mobile
      >
        {/* Assessment 1 */}
        <Box 
          flex="1"
          width="100%" // Full width on mobile
          height="400px" 
          bg="rgba(54, 54, 54, 0.2)"
          backdropFilter="blur(10px)"
          display="flex" 
          alignItems="flex-start" 
          justifyContent="space-between"
          borderRadius="md"
          color="white"
          overflow="hidden"
          boxShadow={shadow}
          minH="300px"
          border="1px solid"
          borderColor={borderColor}
          _hover={{ boxShadow: "2xl"}}
          flexDirection="column"
        >
          <Text fontWeight="bold"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            borderRadius="full"
            px={4}
            py={1}
            fontSize="sm"
            margin="1"
          >
            Assessment 1
          </Text>
          <Box flex="1" />
          <Box p={3} bg={footerBg} textAlign="center" borderTop="1px solid" borderColor={borderColor} width="100%">
            <Flex justify="center" gap="20%">
              <Link
                href={"#"}
                isExternal
                color={linkColor}
                fontWeight="medium"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <FaGithub size={20} /> GitHub
              </Link>
              <Link
                href={"#"}
                isExternal
                color={linkColor}
                fontWeight="medium"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <FaExternalLinkAlt size={20} /> Demo
              </Link>
            </Flex>
          </Box>
        </Box>

        {/* Assessment 2 */}
        <Box 
          flex="1"
          width="100%" // Full width on mobile
          height="400px" 
          bg="rgba(54, 54, 54, 0.2)"
          backdropFilter="blur(10px)"
          display="flex" 
          alignItems="flex-start" 
          justifyContent="space-between"
          borderRadius="md"
          color="white"
          overflow="hidden"
          boxShadow={shadow}
          minH="300px"
          border="1px solid"
          borderColor={borderColor}
          _hover={{ boxShadow: "2xl"}}
          flexDirection="column"
        >
          <Text fontWeight="bold"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            borderRadius="full"
            px={4}
            py={1}
            fontSize="sm"
            margin="1"
          >
            Assessment 2
          </Text>
          <Box flex="1" />
          <Box p={3} bg={footerBg} textAlign="center" borderTop="1px solid" borderColor={borderColor} width="100%">
            <Flex justify="center" gap="20%">
              <Link
                href={"#"}
                isExternal
                color={linkColor}
                fontWeight="medium"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <FaGithub size={20} /> GitHub
              </Link>
              <Link
                href={"#"}
                isExternal
                color={linkColor}
                fontWeight="medium"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <FaExternalLinkAlt size={20} /> Demo
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AssesmentsComponent;
