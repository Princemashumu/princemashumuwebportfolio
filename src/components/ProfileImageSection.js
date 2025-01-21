import React from 'react';
import { Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Me from '../assets/ME.png';

const ProfileImageSection = () => (
  <Box
    position="absolute"
    top="5%"
    left="%"
    transform="translateX(-50%)"
    zIndex={3}
    display="flex"
    justifyContent="center"
    alignItems="center"
    margin="4rem"
  >
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {/* Optional animated element */}
    </motion.div>

    <Box
      width="300px"
      height="300px"
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.9)"
    >
      <Avatar
        src={Me}
        alt="Profile Image"
        sx={{
          width: '100%',
          height: '90%',
          borderRadius: '50%',
          objectFit: 'cover',
          borderBottom: '10px solid #800080',
          top: '4%'
        }}
      />
    </Box>
  </Box>
);

export default ProfileImageSection;
