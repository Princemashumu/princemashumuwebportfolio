import React, { useEffect, useState } from 'react'; 
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
import Lottie from 'lottie-react';
import animationData1 from '../assets/anime7.json';
import animationData2 from '../assets/anime7 (2).json';
import Splash from '../components/Splash';
import Projects from './Projects'; // Import the Projects component

const MotionBox = motion(Box);

// Centralized color configuration
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

// Animation variants for individual letters
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 5
    }
  }
};

// Animation variant for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5,
      repeat: Infinity,
      repeatDelay: 10
    }
  }
};

const AnimatedText = ({ text }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', gap: '10px' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{
            display: 'inline-block',
            fontWeight: "500",
            fontSize: "60px",
            color: colors.secondaryAccent,
            fontFamily: "Anta, sans-serif",
            letterSpacing: "10px"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      
      <Box backgroundColor={colors.backgroundPrimary} position="relative" height="100vh" overflow="hidden">
        <Lottie
          animationData={animationData1}
          loop
          style={{
            position: 'absolute',
            top: '26%',
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

        <Box
          position="relative"
          zIndex={1}
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          color={colors.primaryText}
          textAlign="left"
          height="100%"
          top="60%"
          gap="0"
          paddingLeft="9%"
        >
          <MotionBox
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 2 }}
            mr={2}
          >
            <Heading
              fontFamily="Anta, sans-serif"
              fontWeight="400"
              as="h1"
              size="2xl"
              mb={5}
              color={colors.primaryText}
              letterSpacing="5px"
            >
              <Text as="span" color={colors.accent}>Digital</Text> Solutions, <br /> One Line of Code at a Time.
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            mt={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text color={colors.primaryText} fontSize="xl">Scroll Down</Text>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ marginTop: "10px" }}
            >
              <Box as="span" width="10px" height="10px" bg={colors.secondaryAccent} borderRadius="50%" display="block" />
            </motion.div>
          </MotionBox>
        </Box>
      </Box>

      <Projects /> {/* Adding the Projects component here */}
    </>
  );
};

export default Home;
