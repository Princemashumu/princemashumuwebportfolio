import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';


const MotionBox = motion(Box);

const ProfileSection = ({ colors }) => (
  <Box
    sx={{
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: { xs: 'center', sm: 'flex-start' },
      justifyContent: { xs: 'center', sm: 'flex-start' },
      flexDirection: 'column',
      color: colors.primaryText,
      textAlign: { xs: 'center', sm: 'left' },
      height: '100%',
      width: '100%',
      top: { xs: '13%', sm: '22%' },
      left: { xs: 0, sm: '15%' },
      paddingX: { xs: '5%', sm: '9%' },
      paddingY: { xs: '2rem', md: '3rem' },
      gap: '1rem',
    }}
  >
    <MotionBox
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 5 }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Anta, sans-serif',
          fontWeight: 400,
          fontSize: { xs: '1.1rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
          mb: { xs: 2, sm: 3, md: 5 },
          color: colors.primaryText,
          letterSpacing: { xs: '1px', md: '5px' },
          textAlign: { xs: 'center', sm: 'left' },
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography component="span" sx={{ color: colors.accent }}>
          {/* Accent text if needed */}
        </Typography>
        Hi, I am a Software Engineer.
      </Typography>
    </MotionBox>
    <Box
      sx={{
        mt: { xs: 17, md: 6 },
        fontFamily: 'Anta, sans-serif',
        fontSize: { xs: '0.5rem', md: '1.125rem' },
        lineHeight: 1.8,
        letterSpacing: '1.5px',
        width: { xs: '90%', sm: '70%', md: '80%' },
        textAlign: { xs: 'center', sm: 'left' },
        padding: { xs: 3, md: 5 },
        borderRadius: 1,
        border: `0.5px solid ${colors.border}`,
        borderLeft: 'none',
        borderTop: 'none',
        borderRight: '10px solid purple',
        borderBottom: '10px solid purple',
        boxShadow: 3,
      }}
    >
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Full Name:</strong> Prince Ngwako Mashumu
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>CodeTribe Location:</strong> Soweto, Johannesburg
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Program Enrolled:</strong> Digital Solutions Developer
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Contact Information:</strong> princengwakomashumu@gmail.com, 0682606328
      </Typography>
      <Typography>
        <strong style={{ color: colors.accent }}>Date:</strong>{' '}
        {new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </Typography>
    </Box>
  </Box>
);

export default ProfileSection;
