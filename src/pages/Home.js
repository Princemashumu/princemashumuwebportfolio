import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
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
import ContactForm from "../components/ContactForm";
import EducationTimeline from "../components/EducationTimeline";

const colors = {
  backgroundPrimary: 'white',
  primaryText: 'black',
  accent: '#9dd5d4',
  secondaryAccent: '#9dd5d4',
  linkHover: '#00bcd4',
  linkBgHover: '#6a1b9a',
  linkBg: '#00bcd4',
  border: '#9dd5d4',
};

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showSocialLinks, setShowSocialLinks] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition <= windowHeight) {
          setShowSocialLinks(false);
        } else {
          setShowSocialLinks(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SplashScreen showSplash={showSplash} />
      <Box
        sx={{
          backgroundColor: colors.backgroundPrimary,
          position: 'relative',
          minHeight: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Hero Section */}
        <Box id="home" sx={{ position: 'relative', height: '90vh', padding: '2rem', left: '0.4rem' }}>
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
          {showSocialLinks && <SocialLinks iconSize={"30px"} gapSize={"30px"} />}
          <ProfileSection colors={colors} />
          <CircleAnimation colors={colors} />
        </Box>

        {/* Additional Content Section */}
        <Box id="projects" sx={{ position: 'relative', minHeight: '90vh', marginTop: { xs: "15%" }, padding: '2rem', left: '1rem' }}>
          <ProjectsPopup colors={colors} />
        </Box>
        <Box id="skills" sx={{ position: 'relative', minHeight: '30vh', padding: '2rem', left: '1rem' }}>
          <SkillsPopup colors={colors} />
        </Box>
        <Box id="assessments" sx={{ bg: "#EFF8FF", position: 'relative', minHeight: '80vh', padding: '2rem', left: '1rem' }}>
          <Assesmentspopup colors={colors} />
        </Box>
        <Box id="education" sx={{ position: 'relative', minHeight: '40vh',paddingBotton:"0",padding: '3rem', left: '1rem' }}>
          <EducationTimeline />
        </Box>
        <Box id="about" sx={{ bg: "#EFF8FF",position: 'relative', minHeight: '50vh', padding: '3rem', left: '1rem' }}>
          <AboutPopup colors={colors} />
        </Box>
        <Box id="about" sx={{ position: 'relative', minHeight: '50vh', padding: '3rem', left: '1rem' }}>
          <ContactForm /> {/* Add Contact Form here */}
        </Box>

        {/* Footer Section */}
        <Box id="footer" sx={{ position: 'relative', minHeight: '0', padding: '2rem' }}>
          {/* Footer content goes here */}
        </Box>
      </Box>
    </>
  );
};

export default Home;
