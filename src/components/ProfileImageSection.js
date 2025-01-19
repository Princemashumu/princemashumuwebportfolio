// components/ProfileImageSection.js
import React from 'react';
import { Box, CircularProgress, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Me from '../assets/ME.png';

const ProfileImageSection = () => (
  <Box
    position="absolute"
    // right="5%"
    sx={{ top: { xs: '-49  %', sm: '26%' }, right: { xs: '5%', sm: '21%' } }}
    bottom="10%"
    zIndex={3}
    display="flex"
    justifyContent="center"
    alignItems="center"
    // borderRight="4px solid #9dd5d4"
  >
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {/* <Box
        width="30px"
        height="30px"
        bgcolor="#9dd5d4"
        borderRadius="50%"
        display="block"
      /> */}
    </motion.div>

    <Box
      width="300px"
      height="300px"
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        // width="500px"
        sx={{ width: { xs: '300px', sm: '800px',md:"300px",lg:"100%" } }}
        height="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          src={Me}
          alt="Prince"
          sx={{
            width: '50%',
            height: '30%',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default ProfileImageSection;
