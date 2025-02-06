import React from 'react';
import { Box, Heading, Text, Flex, useColorModeValue, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

const AssesmentsComponent = () => {

  // Gradient for card background
  const cardBgGradient = useColorModeValue(
    "linear(to-r, purple.50, pink.50)", // Light mode gradient
    "linear(to-r, gray.800, gray.900)"  // Dark mode gradient
  );

  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("purple.600", "purple.300");
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

      <Flex gap="1rem" width="100%" alignItems="flex-start">
        <Box 
          flex="1"
          height="400px" 
          bg="rgba(54, 54, 54, 0.2)"
          backdropFilter="blur(10px)" // Frosted glass effect
          display="flex" 
          alignItems="flex-start" 
          justifyContent="space-between"
          // padding="1rem"
          borderRadius="md"
          color="white"
          overflow="hidden"
          boxShadow={shadow}
          // bgGradient={cardBgGradient} // Apply gradient background
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
          {/* Content Section */}
          <Box flex="1" />
          <Box p={3} bg={footerBg} textAlign="center" borderTop="1px solid" borderColor={borderColor} width={"100%"}>
            <Flex justify="center" gap={"20%"}>
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
                <FaGithub size={20} /> {/* GitHub icon */}
                GitHub
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
                <FaExternalLinkAlt size={20} /> {/* Live link icon */}
                Demo
              </Link>
            </Flex>
          </Box>
        </Box>
        
        <Box 
          flex="1"
          height="400px" 
          bg="rgba(54, 54, 54, 0.2)"
          backdropFilter="blur(10px)" // Frosted glass effect
          display="flex" 
          alignItems="flex-start" 
          justifyContent="space-between"
          // padding="1rem"
          borderRadius="md"
          color="white"
          overflow="hidden"
          boxShadow={shadow}
          // bgGradient={cardBgGradient} // Apply gradient background
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
          {/* Content Section */}
          <Box flex="1" />
          <Box p={3} bg={footerBg} textAlign="center" borderTop="1px solid" borderColor={borderColor} width={"100%"}>
            <Flex justify="center" gap={"20%"}>
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
                <FaGithub size={20} /> {/* GitHub icon */}
                GitHub
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
                <FaExternalLinkAlt size={20} /> {/* Live link icon */}
                Demo
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AssesmentsComponent;
