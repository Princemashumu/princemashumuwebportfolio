// ProjectsPopup.js
import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from './ProjectsNavbar';
import {
  Box,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';



const colors = {
  backgroundPrimary: 'black',
  primaryText: 'white',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
};

const ProjectsPopup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 5)', // Semi-transparent background
          color: 'white',
          zIndex: 1050, // Ensures it sits above the rest of the page
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NavbarComponent/>
        <div style={{ maxWidth: '90%', padding: '20px', textAlign: 'center' }}>

        <Box
          position="fixed"
          top="55%"
          left="3%"
          transform="translateY(-50%)"
          zIndex="2"
          display="flex"
          flexDirection="column"
          alignItems="center"
          color="#70d6ff"
          gap={5}
        >
          {[{ href: 'https://github.com', label: 'GitHub', icon: <FaGithub size="30" /> },
            { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: <FaLinkedin size="30" /> },
            { href: 'https://www.facebook.com', label: 'Facebook', icon: <FaFacebook size="30" /> },
            { href: 'https://www.twitter.com', label: 'Twitter', icon: <FaTwitter size="30" /> },
            { href: 'https://www.instagram.com', label: 'Instagram', icon: <FaInstagram size="30" /> },
            { href: 'https://wa.me/your-number', label: 'WhatsApp', icon: <FaWhatsapp size="30" /> },
          ].map((social, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={social.href}
                isExternal
                aria-label={social.label}
                _hover={{ color: colors.linkHover, bg: colors.linkBgHover }}
                p={2}
                border={`1px solid ${colors.border}`}
                borderRadius="25px"
                bg={colors.linkBg}
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </Box>
        
          <h2>Projects</h2>
          <p>Here’s the content for your Projects popup. It now fills the viewport!</p>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    )
  );
};

export default ProjectsPopup;
