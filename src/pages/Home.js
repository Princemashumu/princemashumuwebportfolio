// pages/Home.js
import React, { useEffect, useState } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import SplashScreen from '../components/SplashScreen';
import SocialLinks from '../components/SocialLinks';
import ProfileSection from '../components/ProfileSection';
import CircleAnimation from '../components/CircleAnimation';
import ProfileImageSection from '../components/ProfileImageSection';
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
        <SocialLinks iconSize={"30px"} gapSize={"30px"} />
        <ProfileSection colors={colors} />
        <CircleAnimation colors={colors} />
        <ProfileImageSection />
      </Box>
    </>
  );
};

export default Home;
