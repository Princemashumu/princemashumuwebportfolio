import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Link, HStack, Tooltip} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiCplusplus, SiSqlite, SiFigma, SiVisualstudio} from 'react-icons/si';
import Lottie from 'lottie-react'; // Import Lottie component
import animationData1 from '../assets/anime1.json'; // Import your Lottie animation JSON file
import animationData2 from '../assets/anime3.json';
import Splash from '../components/Splash';

const MotionBox = motion(Box);

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

      <Box backgroundColor="black" position="relative" height="100vh" overflow="hidden">
        {/* Lottie Animation */}
        <Lottie
          animationData={animationData1}
          loop
          style={{
            position: 'absolute',
            top: '77%',
            left: '88%',
            width: '50%',
            height: '50%',
            zIndex:'1',
            color:'purple',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <Box
          position="fixed"
          top="50%"
          left="2%"
          transform="translateY(-50%)"
          zIndex="2"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={5}
        >
          {/* Social Links */}
          {[
            { href: 'https://github.com', label: 'GitHub', icon: <FaGithub size="20" /> },
            { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: <FaLinkedin size="20" /> },
            { href: 'https://www.facebook.com', label: 'Facebook', icon: <FaFacebook size="20" /> },
            { href: 'https://www.twitter.com', label: 'Twitter', icon: <FaTwitter size="20" /> },
            { href: 'https://www.instagram.com', label: 'Instagram', icon: <FaInstagram size="20" /> },
            { href: 'https://wa.me/your-number', label: 'WhatsApp', icon: <FaWhatsapp size="20" /> }
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              isExternal
              aria-label={social.label}
              _hover={{ color: 'teal.500', bg: 'purple.600' }}
              p={2}
              border="1px solid white"
              borderRadius="25px"
              bg="#800080"
            >
              {social.icon}
            </Link>
          ))}
        </Box>

        {/* Content */}
<Box
  position="relative"
  zIndex={1}
  display="flex"
  alignItems="flex-start" // Change this to flex-start to align items to the left
  justifyContent="flex-start" // Change this to flex-start to position content on the left
  flexDirection="column"
  color="white"
  textAlign="left" // Set text alignment to left
  height="100%"
  top="32%"
  paddingLeft="10%" // Optional: Add padding to give some space from the left edge
>
  <Box display="flex" justifyContent="flex-start" alignItems="center" spacing='6'>
    <MotionBox
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 2 }}
      mr={2}
    >
      <Heading as="h1" size="2xl" mb={5} display="inline-block"></Heading>
    </MotionBox>
    <MotionBox
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 15, duration: 5 }}
    >
      <Heading as="h1" size="2xl" mb={5} display="inline-block" color="white">
        <Text as="span" color="#800080">Digital</Text> Solutions <br /> One Line of Code at a Time
      </Heading>
    </MotionBox>
  </Box>

  <Text fontWeight="bold" fontSize="xl" mb={5}>
    <Text as="span" color="white">Turning</Text> ideas into interactive digital experiences with a touch of{' '}
    <Text as="span" color="#800080">code.</Text>
  </Text>

  <Text
    as={motion.div}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    fontWeight="light"
    fontSize="60px"
    color="white"
    mb={5}
    fontFamily="heading"
    _hover={{ transform: 'translateY(-10px)' }}
  >
    DIGITAL SOLUTIONS DEVELOPER
  </Text>
</Box>
</Box>

      {/* Skills Section inside the second Lottie Animation */}
      <Box backgroundColor="black" position="relative" height="100vh" overflow="hidden">
        <Lottie
          animationData={animationData2}
          loop
          style={{
            position: 'fixed',
            top: '35%',
            left: '22%',
            width: '50%',
            height: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <Box
  position="relative"
  zIndex={1}
  display="flex"
  alignItems="flex-start" // Change this to flex-start to align items to the left
  justifyContent="flex-start" // Change this to flex-start to position content on the left
  flexDirection="column"
  color="white"
  textAlign="left" // Set text alignment to left
  height="100%"
  top="32%"
  paddingLeft="10%" // Optional: Add padding to give some space from the left edge
>
  <Box display="flex" justifyContent="flex-start" alignItems="center" spacing='6'>
    <MotionBox
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 2 }}
      mr={2}
    >
      <Heading as="h1" size="2xl" mb={5} display="inline-block"></Heading>
    </MotionBox>
    <MotionBox
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 15, duration: 5 }}
    >
      <Heading as="h1" size="2xl" mb={5} display="inline-block" color="white">
        <Text as="span" color="#800080">Skills &</Text> Experiences <br />
      </Heading>
    </MotionBox>
  </Box>

  <Text fontWeight="light" fontSize="large" mb={5}>
    <Text as="span" color="white">"As a passionate Digital Solutions Developer <br></br> 
    I transform ideas into interactive and captivating digital experiences, <br></br> 
     one line of code at a time. With a strong foundation in HTML, CSS, <br></br> and JavaScript,  
     I bring web interfaces to life, while my expertise in <br></br> React and Redux ensures seamless,
    dynamic user experiences.<br></br>  I dive deep into backend development with MongoDB and SQL, 
      and <br></br> enhance user interfaces with tools like Figma.<br></br>  From crafting elegant code to solving complex challenges,<br></br> 
      I build solutions that not only meet expectations but exceed them,<br></br> 
     making technology both powerful and beautifully simple."</Text>
    <Text as="span" color="#800080" fontWeight="bold"><br></br>-Prince Ngwako Mashumu.</Text>
  </Text>
  </Box>
  


        {/* Skills Section */}

        <Box border="1px solid white"
              borderRadius="50px"
              bg="#800080"
              zindex="1"
              position="absolute" 
              top="65%" 
              left="72%" 
              transform="translate(-50%, -50%)" 
              color="white"
              paddingTop="40px">
  {/* Top Row */}
  <HStack spacing={6} wrap="wrap" justifyContent="center" mb={2}>
    {[
      { icon: <SiHtml5 size="80" color="#E34F26" />, label: 'HTML' },
      { icon: <SiCss3 size="80" color="#1572B6" />, label: 'CSS' },
      { icon: <SiJavascript size="80" color="#F7DF1E" />, label: 'JavaScript' },
      // { icon: <SiMongodb size="80" color="#47A248" />, label: 'MongoDB' },
     
    ].map((skill, index) => (
      <Tooltip key={index} label={skill.label} fontSize="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={1} // Padding for top icons
          m={1} // Slight margin to space icons slightly
          width="100px"
          height="100px"
        >
          {skill.icon}
          <Text fontSize="sm" color="white" textAlign="center">{skill.label}</Text>
        </Box>
      </Tooltip>
    ))}
  </HStack>

  {/* Bottom Row */}
  <HStack spacing={6} wrap="wrap" justifyContent="flex-end" mb={10}>
    {[
      { icon: <SiCplusplus size="80" color="#00599C" />, label: 'C++' },
      { icon: <SiSqlite size="80" color="#003B57" />, label: 'SQL' },
      { icon: <SiFigma size="80" color="#F24E1E" />, label: 'Figma' },
      { icon: <SiVisualstudio size="100" color="#5C2D91" />, label: 'Visual Studio' },
      { icon: <SiReact size="80" color="#61DAFB" />, label: 'ReactJS' },
      { icon: <SiRedux size="80" color="#764ABC" />, label: 'Redux' },
     
    ].map((skill, index) => (
      <Tooltip key={index} label={skill.label} fontSize="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2} // Increased padding for bottom icons
          m={1} // Slight margin to space icons slightly
          width="100px"
          height="100px"
        >
          {skill.icon}
          <Text fontSize="sm" color="white" textAlign="center">{skill.label}</Text>
        </Box>
      </Tooltip>
    ))}
  </HStack>
</Box>


      </Box>
      
    </>
  );
};

export default Home;
