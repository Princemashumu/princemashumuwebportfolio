import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Importing social media icons
import video from '../assets/bganime2.mp4';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <>
      <Box position="relative" height="100vh" overflow="hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Social Media Icons */}
        <Box
          position="fixed"
          top="50%"
          left="2%"
          transform="translateY(-50%)"
          zIndex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
        >
          {/* GitHub Icon Link */}
          <Link href="https://github.com" isExternal aria-label="GitHub">
            <FaGithub size="36" color="white"
              style={{ transition: 'color 0.3s', ':hover': { color: 'teal.500' } }} />
          </Link>
          <Link href="https://www.linkedin.com" isExternal aria-label="LinkedIn">
            <FaLinkedin size="36" color="white"
              style={{ transition: 'color 0.3s', ':hover': { color: 'teal.500' } }} />
          </Link>
          <Link href="https://www.facebook.com" isExternal aria-label="Facebook">
            <FaFacebook size="36" color="white" 
              style={{ transition: 'color 0.3s', ':hover': { color: 'teal.500' } }} />
          </Link>
          <Link href="https://www.twitter.com" isExternal aria-label="Twitter">
            <FaTwitter size="36" color="white"
              style={{ transition: 'color 0.3s', ':hover': { color: 'teal.500' } }} />
          </Link>
          <Link href="https://www.instagram.com" isExternal aria-label="Instagram">
            <FaInstagram size="36" color="white"
              style={{ transition: 'color 0.3s', ':hover': { color: 'teal.500' } }} />
          </Link>
          {/* WhatsApp Icon Link */}
          <Link href="https://wa.me/your-number" isExternal aria-label="WhatsApp">
            <FaWhatsapp size="36" color="white"
              style={{ transition: 'color 0.3s', ':hover': { color: 'teal.500' } }} />
          </Link>
        </Box>

        {/* Content */}
        <Box
          position="relative"
          zIndex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          color="white"
          textAlign="center"
          height="100%"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <MotionBox
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50, duration: 2 }}
              mr={2}
            >
              <Heading as="h1" size="2xl" mb={5} display="inline-block">
                Crafting
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 15, duration: 5 }}
            >
              <Heading as="h1" size="2xl" mb={5} display="inline-block">
                Digital Experiences, One Line of Code at a Time
              </Heading>
            </MotionBox>
          </Box>

          <Text fontWeight="bold" fontSize="xl" mb={5}>
            <Text as="span" color="teal.500">
              Turning
            </Text>{' '}
            ideas into interactive digital experiences with a touch of{' '}
            <Text as="span" color="teal.500">
              code
            </Text>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
