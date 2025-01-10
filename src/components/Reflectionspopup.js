import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from './ReflectionsNavbar';
import { Box, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData1 from '../assets/anime1.json';

const colors = {
  backgroundPrimary: 'black.900',
  primaryText: 'white',
  accent: '#800080', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
};

const MotionBox = motion(Box);

const ReflectionsPopup = ({ isOpen, onClose }) => {
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
        backgroundColor=' rgb(23,25,35)'
        color={colors.primaryText}
        zIndex="1050"
        overflowY="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <NavbarComponent />
        <Box maxWidth="90%" p="5" textAlign="center" position="relative">
          <Lottie
            animationData={animationData1}
            loop
            style={{
              position: 'fixed',
              top: '76%',
              left: '85%',
              width: '44%',
              height: '44%',
              zIndex: '1',
              transform: 'translate(-50%, -50%)',
            }}
          />

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
            {[
              { href: 'https://github.com', label: 'GitHub', icon: <FaGithub size="30" /> },
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

          <Heading as="h2" fontSize="2xl" mb="4">
            Skills
          </Heading>
          <Text fontSize="lg" mb="6">
            This is where you can showcase your skills. Now displayed fullscreen!
          </Text>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </MotionBox>
    )
  );
};

export default ReflectionsPopup;
