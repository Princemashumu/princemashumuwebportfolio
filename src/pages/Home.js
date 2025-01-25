import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import SplashScreen from '../components/SplashScreen';
import SocialLinks from '../components/SocialLinks';
import ProfileSection from '../components/ProfileSection';
import CircleAnimation from '../components/CircleAnimation';
import ProjectsPopup from '../components/ProjectsPopup';
import SkillsPopup from '../components/SkillsPopup';
import Assesmentspopup from '../components/Assesmentspopup';
import AboutPopup from '../components/AboutPopup';

import Lottie from 'lottie-react';
import animationData1 from '../assets/anime7.json';

const colors = {
  backgroundPrimary: 'gray.900',
  primaryText: 'white',
  accent: '#9dd5d4',
  secondaryAccent: '#9dd5d4',
  linkHover: 'teal.500',
  linkBgHover: 'purple.600',
  linkBg: 'teal.500',
  border: '#9dd5d4',
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
      <SplashScreen showSplash={showSplash} />
      <Box 
        backgroundColor={colors.backgroundPrimary} 
        position="relative" 
        minHeight="100vh" 
        overflowY="auto"
        overflowX="hidden"
      >
        {/* Hero Section */}
        <Box id="home" position="relative" height="100vh" paddingRight="10%">
          <Lottie
            animationData={animationData1}
            loop
            style={{
              position: 'absolute',
              top: '60%',
              left: '35%',
              width: '44%',
              height: '44%',
              zIndex: '1',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <SocialLinks iconSize={"30px"} gapSize={"30px"} />
          <ProfileSection colors={colors} />
          <CircleAnimation colors={colors} />
        </Box>

        {/* Additional Content Section */}
        <Box id="projects" position="relative" minHeight="100vh" padding="2rem">
          <ProjectsPopup colors={colors} />
        </Box>
        <Box id="skills" position="relative" minHeight="30vh" padding="2rem" left="1rem">
          <SkillsPopup colors={colors} />
        </Box>
        <Box id="assessments" position="relative" minHeight="100vh" padding="2rem">
          <Assesmentspopup colors={colors} />
        </Box>
        <Box id="about" position="relative" minHeight="100vh" padding="2rem">
          <AboutPopup colors={colors} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
