import React, { useState } from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Link, Button, useColorModeValue, IconButton, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const colors = {
  backgroundPrimary: 'rgb(23,25,35)',
  primaryText: 'white',
  accent: '#800080',
  secondaryAccent: '#9dd5d4',
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  border: '#9dd5d4',
};

const assessments = [
  { assessment: "UI Challenge", gitLink: "https://github.com/example/ui-challenge", dateCompleted: "2025-01-01", grade: "85%", notes: "Above average." },
  { assessment: "JavaScript", gitLink: "https://github.com/example/javascript-assessment", dateCompleted: "2025-01-05", grade: "90%", notes: "Excellent understanding of basics." },
  { assessment: "React Native", gitLink: "https://github.com/example/react-native-course", dateCompleted: "2025-01-10", grade: "N/A", notes: "Completed an external course." },
  { assessment: "CSS Grid", gitLink: "https://github.com/example/css-grid-assessment", dateCompleted: "2025-01-15", grade: "88%", notes: "Good use of grid layout techniques." },
  { assessment: "Node.js", gitLink: "https://github.com/example/nodejs-assessment", dateCompleted: "2025-01-20", grade: "92%", notes: "Strong understanding of backend concepts." },
  { assessment: "Full Stack Project", gitLink: "https://github.com/example/fullstack-project", dateCompleted: "2025-01-25", grade: "95%", notes: "Outstanding implementation of full stack architecture." },
  { assessment: "UI Challenge", gitLink: "https://github.com/example/ui-challenge", dateCompleted: "2025-01-01", grade: "85%", notes: "Above average." },
  { assessment: "JavaScript", gitLink: "https://github.com/example/javascript-assessment", dateCompleted: "2025-01-05", grade: "90%", notes: "Excellent understanding of basics." },
  { assessment: "React Native", gitLink: "https://github.com/example/react-native-course", dateCompleted: "2025-01-10", grade: "N/A", notes: "Completed an external course." },
  { assessment: "CSS Grid", gitLink: "https://github.com/example/css-grid-assessment", dateCompleted: "2025-01-15", grade: "88%", notes: "Good use of grid layout techniques." },
  { assessment: "Node.js", gitLink: "https://github.com/example/nodejs-assessment", dateCompleted: "2025-01-20", grade: "92%", notes: "Strong understanding of backend concepts." },
];

const ITEMS_PER_PAGE = 4;

const MotionBox = motion(Box);

const AssesmentsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);

  const totalPages = Math.ceil(assessments.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAssessments = assessments.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const loadAll = () => {
    setShowScrollButton(false);
  };

  const cardBgGradient = useColorModeValue(
    "linear(to-r, purple.50, pink.50)",
    "linear(to-r, gray.800, gray.900)"
  );

  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const borderColor = useColorModeValue("purple.300", "purple.600");
  const tableHeaderBg = useColorModeValue("purple.50", "purple.800");
  const tableRowBg = useColorModeValue("white", "gray.700");

  return (

    <Box position={"relative"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} textAlign={"center"} padding={"2rem"} gap={"1rem"}>
       <Heading
          as="h2"
          fontSize="2xl"
          mb="4"
          bgGradient="linear(to-r, purple.400, pink.400)"
          bgClip="text"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Assessments
        </Heading>

    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      backgroundColor={colors.backgroundPrimary}
      color={colors.primaryText}
      overflowY="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="6"
      maxHeight="100vh"
    >
      <Box
        maxWidth="90%"
        textAlign="center"
        p="5"
        borderRadius="lg"
        bgGradient={cardBgGradient}
        border="1px solid"
        borderColor={borderColor}
        boxShadow="2xl"
      >
       
        <Text fontSize="md" mb="6" color={textColor}>
          Here is a list of completed assessments showcasing practical skills and learning milestones. 
          Click on the Git Link to view code implementations or explore notes for key highlights.
        </Text>
        <Box
          maxHeight="400px"
          overflowY="auto"
          borderRadius="md"
          border="1px solid"
          borderColor={borderColor}
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#2D3748',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#805AD5',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#6B46C1',
            },
          }}
        >
          <Table width="100%" backgroundColor="black" variant="simple" colorScheme="purple">
            <Thead position="sticky" top="0" bg={tableHeaderBg} zIndex="1">
              <Tr>
                <Th color={headingColor} textAlign="center">Assessment</Th>
                <Th color={headingColor} textAlign="center">Git Link</Th>
                <Th color={headingColor} textAlign="center">Date Completed</Th>
                <Th color={headingColor} textAlign="center">Grade/Score</Th>
                <Th color={headingColor} textAlign="center">Notes</Th>
              </Tr>
            </Thead>
            <Tbody bg={tableRowBg}>
              {currentAssessments.map((item, index) => (
                <Tr
                  key={index}
                  _hover={{ bg: "#c96fc6" }}
                  transition="all 0.3s ease"
                  backgroundColor="#171923"
                  borderRadius="md"
                  boxShadow="sm"
                >
                  <Td textAlign="center">{item.assessment}</Td>
                  <Td textAlign="center">
                    <Link
                      href={item.gitLink}
                      isExternal
                      _hover={{ color: "purple.500", textDecoration: "underline" }}
                    >
                      View Code
                    </Link>
                  </Td>
                  <Td textAlign="center">{item.dateCompleted}</Td>
                  <Td textAlign="center">{item.grade}</Td>
                  <Td textAlign="center">{item.notes}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <HStack spacing={4} justifyContent="center" mt="4">
          <IconButton
            icon={<ChevronLeft size={24} />}
            onClick={previousPage}
            isDisabled={currentPage === 0}
            colorScheme="purple"
            color="#d694d6"
            variant="outline"
            border="1px solid #d694d6"
            aria-label="Previous page"
            _hover={{ bg: "purple.600", color: "white" }}
          />
          <Text color={textColor}>
            Page {currentPage + 1} of {totalPages}
          </Text>
          <IconButton
            icon={<ChevronRight size={24} />}
            onClick={nextPage}
            isDisabled={currentPage === totalPages - 1}
            colorScheme="purple"
            color="#d694d6"
            variant="outline"
            border="1px solid #d694d6"
            aria-label="Next page"
            _hover={{ bg: "purple.600", color: "white" }}
          />
        </HStack>
        {showScrollButton && (
          <Button
            mt="4"
            colorScheme="purple"
            onClick={loadAll}
            size="md"
            color="#d694d6"
            _hover={{ bg: "purple.600" }}
          >
            Show All Assessments
          </Button>
        )}
        <Text fontSize="sm" mt="4" color={textColor}>
          Showing {startIndex + 1}-{Math.min(endIndex, assessments.length)} of {assessments.length} assessments
        </Text>
      </Box>
    </MotionBox>
    </Box>
  );
};

export default AssesmentsComponent;