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
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      color: colors.primaryText,
      textAlign: 'left',
      height: '100%',
      top: '30%',
      left: '15%',
      gap: '1rem',
      paddingLeft: '9%',
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
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.5rem' },
          mb: { xs: 3, md: 5 },
          color: colors.primaryText,
          letterSpacing: { xs: '2px', md: '5px' },
          textAlign: 'center',
          px: { xs: 4, md: 0 },
        }}
      >
        <Typography
          component="span"
          sx={{ color: colors.accent }}
        >
          Hi,
        </Typography>{' '}
        I am a Software Engineer.
      </Typography>
    </MotionBox>

    <Box
      sx={{
        mt: 6,
        fontFamily: 'Anta, sans-serif',
        fontSize: { xs: '1rem', md: '1.125rem' },
        lineHeight: 1.8,
        letterSpacing: '1.5px',
        p: { xs: 3, md: 5 },
        marginRight: { xs: '5%', md: '9%' },
        borderRadius: 1,
        border: `0.5px solid ${colors.border}`,
        borderLeft: 'none',
        borderTop: 'none',
        borderRight: '10px solid purple',
        borderBottom: '10px solid purple',
        boxShadow: 3,
        paddingLeft: '2%',
      }}
    >
      <Typography mb={3}>
        <strong style={{ color: colors.accent }}>Full Name:</strong> Prince Ngwako Mashumu
      </Typography>
      <Typography mb={3}>
        <strong style={{ color: colors.accent }}>CodeTribe Location:</strong> Soweto, Johannesburg
      </Typography>
      <Typography mb={3}>
        <strong style={{ color: colors.accent }}>Program Enrolled:</strong> Digital Solutions Developer
      </Typography>
      <Typography mb={3}>
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
