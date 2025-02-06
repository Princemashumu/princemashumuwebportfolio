// import React, { useState } from 'react';
// import {
//   Box,
//   SimpleGrid,
//   Card,
//   CardBody,
//   IconButton,
//   Text,
//   Heading,
//   Link,
//   Flex,
//   Tag,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import { MdNavigateNext, MdArrowBackIos } from "react-icons/md";

// const GroupProjects = ({ projects }) => {
//   // Gradient for card background
//   const cardBgGradient = useColorModeValue(
//     "linear(to-r, purple.50, pink.50)", // Light mode gradient
//     "linear(to-r, gray.800, gray.900)"  // Dark mode gradient
//   );
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;
//   const textColor = useColorModeValue("gray.700", "gray.200");
//   const headingColor = useColorModeValue("purple.600", "purple.300");
//   const borderColor = useColorModeValue("purple.300", "purple.600");
//   const footerBg = useColorModeValue("gray.200", "gray.800");
//   const linkColor = borderColor;

//   const handleNext = () => {
//     if (currentIndex + itemsPerPage < projects.length) {
//       setCurrentIndex(currentIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - itemsPerPage >= 0) {
//       setCurrentIndex(currentIndex - itemsPerPage);
//     }
//   };

//   return (
//     <Box py={8} px={{ base: 4, md: 8 }}>
//       <Heading
//         as="h3"
//         textAlign="center"
//         fontSize="2xl"
//         mb={6}
//         bgGradient="linear(to-r, purple.400, pink.400)"
//         bgClip="text"
//         fontWeight="extrabold"
//         textTransform="uppercase"
//         letterSpacing="wide"
//       >
//         Group Projects
//       </Heading>
//       <Text
//         textAlign="center"
//         fontSize="md"
//         color="gray.600"
//         mb={8}
//       >
//         Explore our collaborative projects that showcase teamwork, innovation, 
//         and cutting-edge technology.
//       </Text>

//       <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
//         <IconButton
//           aria-label="Previous"
//           icon={<MdArrowBackIos />}
//           onClick={handlePrev}
//           isDisabled={currentIndex === 0}
//           size="sm"
//           variant="ghost"
//           colorScheme="purple"
//         />
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%" maxW="100%">
//           {projects.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={{ width: '100%' }} // Ensure motion.div takes full width
//             >
//               <Card
//                 borderRadius="lg"
//                 overflow="hidden"
//                 boxShadow="lg"
//                 cursor="pointer"
//                 _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
//                 transition="all 0.3s ease"
//                 bgGradient={cardBgGradient}
//                 border="1px solid"
//                 borderColor={borderColor}
//                 width="100%" // Ensure card takes full width
//               >
//                 <CardBody p={6}>
//                   <Text fontWeight="bold" fontSize="lg" color={headingColor} mb={4}>
//                     {project.title}
//                   </Text>
//                   <Text fontSize="sm" color={textColor} mb={4}>
//                     {project.description}
//                   </Text>

//                   <Box mb={4}>
//                     <Heading size="sm" mb={2} color={headingColor}>
//                       Tech Stack:
//                     </Heading>
//                     <Flex wrap="wrap" gap={2}>
//                       {project.techStack.map((tech, index) => (
//                         <Tag
//                           key={index}
//                           size="sm"
//                           variant="subtle"
//                           bgGradient="linear(to-r, purple.500, pink.500)"
//                           color="white"
//                           borderRadius="full"
//                           px={4}
//                           py={1}
//                           fontSize="sm"
//                           fontWeight="medium"
//                         >
//                           {tech}
//                         </Tag>
//                       ))}
//                     </Flex>
//                   </Box>

//                   <Box mb={4}>
//                     <Heading size="sm" mb={2} color={headingColor}>
//                       Key Features:
//                     </Heading>
//                     <Box as="ul" pl={6} color={textColor}>
//                       {project.keyFeatures.map((feature, index) => (
//                         <Text as="li" key={index} mb={2} fontSize="sm">
//                           {feature}
//                         </Text>
//                       ))}
//                     </Box>
//                   </Box>

//                   <Box>
//                     <Heading size="sm" mb={2} color={headingColor}>
//                       Challenges:
//                     </Heading>
//                     <Text fontSize="sm" color={textColor}>
//                       {project.challenges}
//                     </Text>
//                   </Box>

//                   {project.githubLink && (
//                     <Box p={3} bg={footerBg} textAlign="center" borderTop="1px solid" borderColor={borderColor}>
//                       <Link
//                         href={project.githubLink || "#"}
//                         isExternal
//                         color={linkColor}
//                         fontWeight="medium"
//                         fontSize="sm"
//                         _hover={{ textDecoration: "underline" }}
//                       >
//                         View on GitHub
//                       </Link>
//                     </Box>
//                   )}
//                 </CardBody>
//               </Card>
//             </motion.div>
//           ))}
//         </SimpleGrid>
//         <IconButton
//           aria-label="Next"
//           icon={<MdNavigateNext />}
//           onClick={handleNext}
//           isDisabled={currentIndex + itemsPerPage >= projects.length}
//           size="sm"
//           variant="ghost"
//           colorScheme="purple"
//         />
//       </Box>
//     </Box>
//   );
// };

// export default GroupProjects;



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

const GroupProjects = ({ projects }) => {
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

   const textColor = useColorModeValue("gray.800", "gray.100"); // Slightly more contrast
  const headingColor = useColorModeValue("blue.600", "blue.300"); // Softer blue tones
  const borderColor = useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.2)"); // Transparent border
  const shadow = useColorModeValue("lg", "2xl"); // Softer shadow in light mode
  const footerBg = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"); // Glass-like footer
  const linkColor = useColorModeValue("blue.500", "blue.300"); // Subtle blue for links
  

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
        Collaborated Projects
      </Heading>
      <Text
        textAlign="center"
        fontSize="sm"
        color="black"
        mb={6}
        letterSpacing="1px"
      >
       Explore our collaborative projects that showcase teamwork, innovation, 
 and cutting-edge technology.
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
              boxShadow="lg"
              bg="rgba(54, 54, 54, 0.2)"
              backdropFilter="blur(10px)" // Frosted glass effect
              minH="300px"
              border="1px solid rgba(255, 255, 255, 0.3)" // Soft border
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

              <Box p={3} bg="white" textAlign="center" borderTop="1px solid" borderColor={borderColor}>
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

export default GroupProjects;