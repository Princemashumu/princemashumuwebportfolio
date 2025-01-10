import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  IconButton,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const IndividualProjects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current starting index
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 3; // Number of projects to show at a time

  // Calculate the projects to display
  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div style={{ paddingTop: "1%" }}>
      <Heading
        as="h3"
        textAlign="center"
        fontSize="2xl"
        mb={6}
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Individual Projects
      </Heading>
      <Text
        textAlign="center"
        fontSize="md"
        color="gray.600"
        mb={4}
      >
        Discover personal projects that highlight creativity, problem-solving, and technical skills.
      </Text>

      <Box display="flex" alignItems="center" justifyContent="center" gap="10px">
        {/* Left Arrow */}
        <IconButton
          aria-label="Previous"
          icon={<ArrowLeftIcon />}
          onClick={handlePrev}
          isDisabled={currentIndex === 0}
        />

        {/* Projects Grid */}
        <SimpleGrid columns={[1, 2, 3]} spacing={4} padding="20px">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(project)}
            >
              <Card
                borderRadius="md"
                overflow="hidden"
                boxShadow="lg"
                cursor="pointer"
                _hover={{ boxShadow: "xl" }}
              >
                <CardBody>
                  <Heading as="h4" size="md" color="purple.600">
                    {project.title}
                  </Heading>
                  <Text mt={2} fontSize="sm" color="gray.600">
                    {project.description}
                  </Text>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>

        {/* Right Arrow */}
        <IconButton
          aria-label="Next"
          icon={<ArrowRightIcon />}
          onClick={handleNext}
          isDisabled={currentIndex + itemsPerPage >= projects.length}
        />
      </Box>

      {selectedProject && (
  <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
    <ModalOverlay />
    <ModalContent 
      bg="gray.800" 
      color="white" 
      borderRadius="lg" 
      boxShadow="2xl" 
      overflow="hidden"
      position="relative"
      top="-50px"  // Adjust this value to move the modal higher or lower
    >
      <ModalHeader
        fontSize="2xl"
        fontWeight="bold"
        bgGradient="linear(to-r, purple.500, purple.700)"
        color="white"
        p={4}
      >
        {selectedProject.title}
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
            Description:
          </Heading>
          <Box fontSize="lg">{selectedProject.description}</Box>
        </Box>
        <Box
          p={4}
          bg="gray.700"
          borderRadius="md"
          boxShadow="md"
          mb={4}
        >
          <Heading size="sm" mb={2} color="purple.300">
            Tech Stack:
          </Heading>
          <Box fontSize="lg">
            <Text as="span" fontWeight="medium" color="purple.500">
              {selectedProject.techStack.join(", ")}
            </Text>
          </Box>
        </Box>
        <Box
          p={4}
          bg="gray.700"
          borderRadius="md"
          boxShadow="md"
          mb={4}
        >
          <Heading size="sm" mb={2} color="purple.300">
            Key Features:
          </Heading>
          <Box as="ul" pl={6} color="gray.600">
            {selectedProject.keyFeatures.map((feature, index) => (
              <Text as="li" key={index} mb="2" fontSize="lg">
                {feature}
              </Text>
            ))}
          </Box>
        </Box>
        <Box
          p={4}
          bg="gray.700"
          borderRadius="md"
          boxShadow="md"
        >
          <Heading size="sm" mb={2} color="purple.300">
            Challenges:
          </Heading>
          <Box fontSize="lg">{selectedProject.challenges}</Box>
        </Box>
      </ModalBody>
      <ModalFooter
        bg="gray.700"
        display="flex"
        justifyContent="space-between"
        padding={4}
      >
        {/* GitHub Link */}
        <Link
          href={selectedProject.githubLink} 
          isExternal
          color="purple.500" 
          fontWeight="semibold" 
          fontSize="sm"
          mr={4}
        >
          View on GitHub
        </Link>

        {/* Hosted Link */}
        <Link
          href={selectedProject.hostedLink} 
          isExternal
          color="purple.500" 
          fontWeight="semibold" 
          fontSize="sm"
          mr={4}
        >
          View Hosted
        </Link>

        {/* Close Button */}
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

</div>
  );
};

export default IndividualProjects;
