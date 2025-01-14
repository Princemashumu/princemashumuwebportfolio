// components/ProfileImageSection.js
import React from 'react';
import { Box, CircularProgress, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Me from '../assets/ME.png';

const ProfileImageSection = () => (
  <Box
    position="fixed"
    right="2.2%"
    top="63%"
    bottom="10%"
    zIndex={3}
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRight="4px solid #9dd5d4"
  >
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <Box
        width="30px"
        height="30px"
        bgcolor="#9dd5d4"
        borderRadius="50%"
        display="block"
      />
    </motion.div>

    <Box
      width="450px"
      height="450px"
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        width="500px"
        height="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          src={Me}
          alt="Prince"
          sx={{
            width: '60%',
            height: '50%',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default ProfileImageSection;
