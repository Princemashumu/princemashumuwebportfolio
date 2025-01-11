import React from 'react';
import { Box, Button, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NavbarComponent from './AssesmentsNavbar';

// Define color constants for easy management
const colors = {
  backgroundPrimary: 'rgb(23,25,35)',
  primaryText: 'white',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  border: '#9dd5d4',
};

// Sample data for assessments
const assessments = [
  {
    assessment: "UI Challenge",
    gitLink: "https://github.com/example/ui-challenge",
    dateCompleted: "2025-01-01",
    grade: "85%",
    notes: "Above average.",
  },
  {
    assessment: "JavaScript",
    gitLink: "https://github.com/example/javascript-assessment",
    dateCompleted: "2025-01-05",
    grade: "90%",
    notes: "Excellent understanding of basics.",
  },
  {
    assessment: "React Native",
    gitLink: "https://github.com/example/react-native-course",
    dateCompleted: "2025-01-10",
    grade: "N/A",
    notes: "Completed an external course.",
  },
  {
    assessment: "CSS Grid",
    gitLink: "https://github.com/example/css-grid-assessment",
    dateCompleted: "2025-01-15",
    grade: "88%",
    notes: "Good use of grid layout techniques.",
  },
  {
    assessment: "Node.js",
    gitLink: "https://github.com/example/nodejs-assessment",
    dateCompleted: "2025-01-20",
    grade: "92%",
    notes: "Strong understanding of backend concepts.",
  },
];

const MotionBox = motion(Box);

const AssesmentsPopup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        backgroundColor={colors.backgroundPrimary}
        color={colors.primaryText}
        zIndex="1050"
        overflowY="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="6"
      >
        <NavbarComponent />
        <Box
          maxWidth="90%"
          textAlign="center"
          p="5"
          borderRadius="lg"
          bg="gray.700"
          position="relative"
          top="50px"
        >
          <Heading as="h2" fontSize="2xl" mb="4">
            Assessments
          </Heading>
          {/* Add a description */}
          <Text fontSize="md" mb="6" color="gray.300">
            Here is a list of completed assessments showcasing practical skills and learning milestones. 
            Click on the Git Link to view code implementations or explore notes for key highlights.
          </Text>

          {/* Scrollable Table */}
          <Box
            maxHeight="300px"
            overflowY="auto"
            borderRadius="md"
            border="1px solid"
            borderColor={colors.border}
          >
            <Table variant="simple" colorScheme="purple">
              <Thead position="sticky" top="0" bg="gray.800" zIndex="1">
                <Tr>
                  <Th color="white">Assessment</Th>
                  <Th color="white">Git Link</Th>
                  <Th color="white">Date Completed</Th>
                  <Th color="white">Grade/Score</Th>
                  <Th color="white">Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                {assessments.slice(0, 4).map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.assessment}</Td>
                    <Td>
                      <Link href={item.gitLink} isExternal color={colors.linkHover}>
                        View Code
                      </Link>
                    </Td>
                    <Td>{item.dateCompleted}</Td>
                    <Td>{item.grade}</Td>
                    <Td>{item.notes}</Td>
                  </Tr>
                ))}
                {assessments.slice(4).map((item, index) => (
                  <Tr key={index + 4}>
                    <Td>{item.assessment}</Td>
                    <Td>
                      <Link href={item.gitLink} isExternal color={colors.linkHover}>
                        View Code
                      </Link>
                    </Td>
                    <Td>{item.dateCompleted}</Td>
                    <Td>{item.grade}</Td>
                    <Td>{item.notes}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          {/* Total Count or Pagination */}
          <Text fontSize="sm" mt="4" color="gray.400">
            Showing 1-{Math.min(4, assessments.length)} of {assessments.length} assessments.
          </Text>
        </Box>
        <Button
          onClick={onClose}
          bg={colors.accent}
          color="white"
          size="lg"
          borderRadius="full"
          px={8}
          py={4}
          mt={6}
          fontSize="lg"
          fontWeight="bold"
          _hover={{
            bg: colors.linkBgHover,
          }}
          _active={{
            bg: colors.linkBg,
          }}
          _focus={{
            outline: 'none',
          }}
          position="relative"
          top="50px"
        >
          Close
        </Button>
      </MotionBox>
    )
  );
};

export default AssesmentsPopup;
