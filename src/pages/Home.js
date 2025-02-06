import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'; // MUI Box component
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
  backgroundPrimary: 'white', // Updated to light purple background
  primaryText: 'black',
  accent: '#9dd5d4',
  secondaryAccent: '#9dd5d4',
  linkHover: '#00bcd4', // MUI color for teal
  linkBgHover: '#6a1b9a', // MUI purple
  linkBg: '#00bcd4', // MUI color for teal
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
        sx={{
          backgroundColor: colors.backgroundPrimary, // Updated background color
          position: 'relative', 
          minHeight: '100vh', 
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Hero Section */}
        <Box id="home" sx={{ position: 'relative', height: '90vh', paddingRight: '-8%' }}>
          <Lottie
            animationData={animationData1}
            loop
            style={{
              position: 'absolute',
              top: '75%',
              left: '28%',
              width: '50%',
              height: '50%',
              zIndex: '1',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <SocialLinks iconSize={"30px"} gapSize={"30px"} />
          <ProfileSection colors={colors} />
          <CircleAnimation colors={colors} />
        </Box>

        {/* Additional Content Section */}
        <Box id="projects" sx={{ position: 'relative', minHeight: '90vh',marginTop:{xs:"15%"},padding: '2rem'}}>
          <ProjectsPopup colors={colors} />
        </Box>
        <Box id="skills" sx={{ position: 'relative', minHeight: '30vh', padding: '2rem', left: '1rem' }}>
          <SkillsPopup colors={colors} />
        </Box>
        <Box id="assessments" sx={{ bg:"#EFF8FF",position: 'relative', minHeight: '100vh', padding: '2rem' }}>
          <Assesmentspopup colors={colors} />
        </Box>
        <Box id="about" sx={{ position: 'relative', minHeight: '100vh', padding: '2rem' }}>
          <AboutPopup colors={colors} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
