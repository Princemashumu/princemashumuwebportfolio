// Navbar.js
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link,
  Image,
  useColorModeValue,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import logo from '../assets/logo3.png'; // Adjust the path based on the location of the logo file
import HomePopup from '../components/HomePopup';
import ProjectsPopup from '../components/ProjectsPopup';
import SkillsPopup from '../components/SkillsPopup';
import AboutPopup from '../components/AboutPopup';

const Navbar = () => {
  const [isHomePopupOpen, setIsHomePopupOpen] = useState(false);
  const [isProjectsPopupOpen, setIsProjectsPopupOpen] = useState(false);
  const [isSkillsPopupOpen, setIsSkillsPopupOpen] = useState(false);
  const [isAboutPopupOpen, setIsAboutPopupOpen] = useState(false);

  // Define hover colors
  const hoverColor = useColorModeValue('#800080');

  const handlePopupClose = () => {
    setIsHomePopupOpen(false);
    setIsProjectsPopupOpen(false);
    setIsSkillsPopupOpen(false);
    setIsAboutPopupOpen(false);
  };

  return (
    <>
      <Box bg="transparent" px={4} position="fixed" width="100%" zIndex="1000">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box>
            <Link as={RouterLink} to="/">
              <Image src={logo} alt="Logo" width="200px" />
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
            fontFamily="'Poppins', sans-serif" // Apply Google Font
          >
            <Link
              as={RouterLink}
              color="white" // Default color
              _hover={{ color: hoverColor }}
              onClick={() => setIsProjectsPopupOpen(true)}
            >
              Projects
            </Link>
            <Link
              as={RouterLink}
              color="white" // Default color
              _hover={{ color: hoverColor }}
              onClick={() => setIsSkillsPopupOpen(true)}
            >
              Skills
            </Link>
            <Link
              as={RouterLink}
              color="white" // Default color
              _hover={{ color: hoverColor }}
              onClick={() => setIsAboutPopupOpen(true)}
            >
              About Me
            </Link>
          </Flex>

          {/* Download Resume Button */}
          <Tooltip label="Download resume" aria-label="Download resume tooltip">
            <Button
              as="a"
              href="https://drive.google.com/uc?export=download&id=112u74R9KDHlTPyegWofwC9KZtFTpTCBq" // Direct download link
              download // Triggers the download
              leftIcon={<DownloadIcon />}
              bg="#800080" // Background color
              color="white" // Text color
              _hover={{ bg: "#993399" }} // Darker purple on hover
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

      {/* Popup Components */}
      {isHomePopupOpen && <HomePopup isOpen={isHomePopupOpen} onClose={handlePopupClose} />}
      {isProjectsPopupOpen && <ProjectsPopup isOpen={isProjectsPopupOpen} onClose={handlePopupClose} />}
      {isSkillsPopupOpen && <SkillsPopup isOpen={isSkillsPopupOpen} onClose={handlePopupClose} />}
      {isAboutPopupOpen && <AboutPopup isOpen={isAboutPopupOpen} onClose={handlePopupClose} />}
    </>
  );
};

export default Navbar;
