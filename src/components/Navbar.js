import React from 'react';
import { Box, Flex, Link, Image, useColorModeValue, Button, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons'; // Import the Download icon
import logo from '../assets/logo3.png'; // Adjust the path based on the location of the logo file

const Navbar = () => {
  const location = useLocation();

  // Define active and hover colors
  const activeColor = useColorModeValue('teal.300', 'teal.200');
  const hoverColor = useColorModeValue('teal.500', 'teal.400');

  return (
    <Box bg="transparent" px={4} position="absolute" width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box>
          <Link as={RouterLink} to="/">
            <Image src={logo} alt="Logo" width="200px" /> {/* Adjust size as needed */}
          </Link>
        </Box>

        {/* Navigation Links - Centered */}
        <Flex
          alignItems="center"
          justifyContent="center"
          flex="1"
          gap="50px"
          fontWeight="bold"
          fontSize="20px"
          fontFamily="sans-serif"
        >
          <Link
            as={RouterLink}
            to="/"
            color={location.pathname === '/' ? activeColor : 'white'}
            mr={4}
            _hover={{ color: hoverColor }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/projects"
            color={location.pathname === '/projects' ? activeColor : 'white'}
            mr={4}
            _hover={{ color: hoverColor }}
          >
            Projects
          </Link>
          <Link
            as={RouterLink}
            to="/Skills"
            color={location.pathname === '/Skills' ? activeColor : 'white'}
            _hover={{ color: hoverColor }}
          >
            Skills
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            color={location.pathname === '/about' ? activeColor : 'white'}
            mr={4}
            _hover={{ color: hoverColor }}
          >
            About
          </Link>
        </Flex>

        {/* Download Resume Button on the right */}
        <Tooltip label="Download resume" aria-label="Download resume tooltip">
          <Button
            as="a" // Use 'a' if linking to the file
            href="/path/to/your/resume.pdf" // Update with the actual path to the resume
            leftIcon={<DownloadIcon />}
            colorScheme="purple"
            variant="solid"
            size="md"
            ml={4}
            borderRadius="25px"
          >
            Download Resume
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Navbar;
