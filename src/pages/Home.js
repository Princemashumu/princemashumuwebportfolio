import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  useBreakpointValue ,
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
import Splash from '../components/Splash';
import Me from '../assets/ME.png';


const MotionBox = motion(Box);

// Centralized color configuration
const colors = {
  backgroundPrimary: 'gray.900',
  primaryText: 'white',
  accent: '#9dd5d4 ', // Purple
  secondaryAccent: '#9dd5d4', // Light teal
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
};

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
 // Use useBreakpointValue at the top of the component
 const iconSize = useBreakpointValue({ base: '20px', md: '20px' ,lg: '30px'});
 const gapSize = useBreakpointValue({ base: 3, md: 5, lg: 5 });


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
      gap={gapSize} // Use gapSize here
    >
      {[
        { href: 'https://github.com/Princemashumu', label: 'GitHub', icon: <FaGithub /> },
        { href: 'https://www.linkedin.com/in/prince-ngwako-mashumu-77977924b/', label: 'LinkedIn', icon: <FaLinkedin /> },
        { href: 'https://www.facebook.com/princengwakomashumu', label: 'Facebook', icon: <FaFacebook /> },
        { href: 'https://www.twitter.com/princemashumu', label: 'Twitter', icon: <FaTwitter /> },
        { href: 'https://www.instagram.com/princengwakomashumu', label: 'Instagram', icon: <FaInstagram /> },
        { href: 'https://wa.me/0682606328', label: 'WhatsApp', icon: <FaWhatsapp /> },
      ].map((social, index) => (
        <motion.div key={index} whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={social.href}
            isExternal
            aria-label={social.label}
            _hover={{ color: '#fff', bg: '#70d6ff' }}
            p={1} // Adjust padding for smaller screens
            border="1px solid #70d6ff"
            borderRadius="25px"
            bg="#000"
          >
            <Box fontSize={iconSize}>{social.icon}</Box> {/* Use iconSize here */}
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
  top="30%"
  left="15%"
  gap="1rem"
  paddingLeft="9%"
>
<MotionBox
  initial={{ opacity: 0, x: '-100vw' }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: 'spring', stiffness: 50, duration: 5 }}
>
  <Heading
    fontFamily="Anta, sans-serif"
    fontWeight="400"
    as="h1"
    size={{ base: 'sm', sm: 'x.5', md: '2xl', lg: '2xl', xl: '2xl' }} // Adjust size based on screen size
    mb={{ base: 3, md: 5 }} // Adjust margin bottom for spacing
    color={colors.primaryText}
    letterSpacing={{ base: '2px', md: '5px' }} // Adjust letter spacing for better readability
    textAlign="center" // Center text for small screens
    px={{ base: 4, md: 0 }} // Add padding for smaller screens
  >
    <Text as="span" color={colors.accent}>
      Hi,
    </Text>{' '}
    I am a Software Engineer.
  </Heading>
</MotionBox>

<Box
  mt={6}
  fontFamily="Anta, sans-serif"
  fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
  lineHeight="1.8"
  letterSpacing="1.5px"
  p={{ base: 3, md: 5 }} // Responsive padding
  marginRight={{ base: '5%', md: '9%' }} // Responsive margin
  borderRadius="md"
  border={`0.5px solid ${colors.border}`} // Default border
  borderLeft="none" // No border on the left
  borderTop="none" // No border on the top
  borderRight={`10px solid purple`} // Custom purple border on the right
  borderBottom={`10px solid purple`} // Custom light teal border on the bottom
  boxShadow="lg"
  paddingLeft="2%"
  // bg="linear-gradient(to bottom, #f8f9fa, #e9ecef)" // Subtle gradient for modern look
  color={colors.primaryText}
>
  <Text mb={3}>
    <strong style={{ color: colors.accent }}>Full Name:</strong> Prince Ngwako Mashumu
  </Text>
  <Text mb={3}>
    <strong style={{ color: colors.accent }}>CodeTribe Location:</strong> Soweto, Johannesburg
  </Text>
  <Text mb={3}>
    <strong style={{ color: colors.accent }}>Program Enrolled:</strong> Digital Solutions Developer
  </Text>
  <Text mb={3}>
    <strong style={{ color: colors.accent }}>Contact Information:</strong> princengwakomashumu@gmail.com, 0682606328
  </Text>
  <Text>
    <strong style={{ color: colors.accent }}>Date:</strong>{' '}
    {new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short', // Displays the short name of the month
      year: 'numeric',
    })}
  </Text>
</Box>
</Box >
{/* </MotionBox> */}

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
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ marginTop: "10px" }}
            >
              <Box as="span" width="10px" height="10px" bg={colors.secondaryAccent} borderRadius="50%" display="block" />
            </motion.div>
          </MotionBox>
        </Box>

         {/* Small circle on the right side */}
         <Box
          position="fixed"
          right="2.2%"
          top="62%"
          bottom="10%"
          zIndex="3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRight={`4px solid ${colors.secondaryAccent}`}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Box
              width="30px"
              height="30px"
              bg="{colors.secondaryAccent}"
              borderRadius="50%"
              display="block"
            />
          </motion.div>
          {/* Circle Container */}
          <Box
            width="450px"
            height="450px"
            left="90%" 
            top="60%"
            borderRadius="50%"
            // border="4px solid white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            {/* Placeholder Image */}
            <Box
              width="500px"
              height="500px"
              // bg="gray.200"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={Me} alt="Prince" borderRadius="50%" />
            </Box>
          </Box>
        </Box>

    </>
  );
};

export default Home;
