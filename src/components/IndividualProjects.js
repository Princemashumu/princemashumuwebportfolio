import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  IconButton,
  Heading,
  Text,
  Flex,
  Tag,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdNavigateNext, MdArrowBackIos } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

const IndividualProjects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
  const linkColor = borderColor;

  // Check if projects array is empty or undefined
  if (!projects || projects.length === 0) {
    return (
      <Box textAlign="center" py={10}>
        <Text fontSize="sm" color={textColor}>
          No projects available.
        </Text>
      </Box>
    );
  }

  const project = projects[currentIndex];

  // Check if project is defined
  if (!project) {
    return (
      <Box textAlign="center" py={10}>
        <Text fontSize="sm" color={textColor}>
          Project data is invalid.
        </Text>
      </Box>
    );
  }

  return (
    <Box py={8} px={{ base: 4, md: 8 }}>
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
        Individual Projects
      </Heading>
      <Text
        textAlign="center"
        fontSize="sm"
        color={textColor}
        mb={6}
      >
        Discover personal projects that highlight creativity, problem-solving, and technical skills.
      </Text>

      <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
        <IconButton
          aria-label="Previous"
          icon={<MdArrowBackIos />}
          onClick={handlePrev}
          isDisabled={currentIndex === 0}
          size="sm"
          variant="ghost"
          colorScheme="purple"
        />

        <Box w="100%" maxW="800px">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              borderRadius="lg"
              overflow="hidden"
              boxShadow={shadow}
              bgGradient={cardBgGradient} // Apply gradient background
              minH="300px"
              border="1px solid"
              borderColor={borderColor}
              _hover={{ boxShadow: "2xl", transform: "translateY(-4px)" }}
              transition="all 0.3s ease"
            >
              <CardBody p={6}>
                <Heading as="h4" size="sm" color={headingColor} mb={4}>
                  {project.title || "Untitled Project"}
                </Heading>
                <Text fontSize="sm" color={textColor} mb={4}>
                  {project.description || "No description available."}
                </Text>

                <Box mb={4}>
                  <Heading size="xs" mb={2} color={headingColor}>
                    Tech Stack
                  </Heading>
                  <Flex wrap="wrap" gap={2}>
                    {project.techStack ? (
                      project.techStack.map((tech, index) => (
                        <Tag
                          key={index}
                          size="sm"
                          variant="subtle"
                          bgGradient="linear(to-r, purple.500, pink.500)"
                          color="white"
                          borderRadius="full"
                          px={4}
                          py={1}
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          {tech}
                        </Tag>
                      ))
                    ) : (
                      <Text fontSize="sm" color={textColor}>
                        No tech stack provided.
                      </Text>
                    )}
                  </Flex>
                </Box>

                <Box mb={4}>
                  <Heading size="xs" mb={2} color={headingColor}>
                    Key Features
                  </Heading>
                  <Box as="ul" pl={6}>
                    {project.keyFeatures ? (
                      project.keyFeatures.map((feature, index) => (
                        <Text as="li" key={index} mb={2} fontSize="sm" color={textColor}>
                          {feature}
                        </Text>
                      ))
                    ) : (
                      <Text fontSize="sm" color={textColor}>
                        No key features listed.
                      </Text>
                    )}
                  </Box>
                </Box>

                <Box>
                  <Heading size="xs" mb={2} color={headingColor}>
                    Challenges
                  </Heading>
                  <Text fontSize="sm" color={textColor}>
                    {project.challenges || "No challenges described."}
                  </Text>
                </Box>
              </CardBody>

              <Box p={3} bg={footerBg} textAlign="center" borderTop="1px solid" borderColor={borderColor}>
  <Flex justify="center" gap={"20%"}> {/* Add spacing between links */}
    <Link
      href={project.githubLink || "#"}
      isExternal
      color={linkColor}
      fontWeight="medium"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      display="flex"
      alignItems="center"
      gap={2} // Add spacing between icon and text
    >
      <FaGithub size={20} /> {/* GitHub icon */}
      GitHub
    </Link>
    <Link
      href={project.liveLink || "#"}
      isExternal
      color={linkColor}
      fontWeight="medium"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      display="flex"
      alignItems="center"
      gap={2} // Add spacing between icon and text
    >
      <FaExternalLinkAlt size={20} /> {/* Live link icon */}
      Demo
    </Link>
  </Flex>
</Box>
            </Card>
          </motion.div>
        </Box>

        <IconButton
          aria-label="Next"
          icon={<MdNavigateNext />}
          onClick={handleNext}
          isDisabled={currentIndex + 1 >= projects.length}
          size="sm"
          variant="ghost"
          colorScheme="purple"
        />
      </Box>
    </Box>
  );
};

export default IndividualProjects;