import React from 'react';
import { Box, Avatar,Typography} from '@mui/material';
import { Heading } from '@chakra-ui/react';
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
    flexDirection="column"
  >
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {/* Optional animated element */}
    </motion.div>
<Heading
        as="h2"
        fontSize="2xl"
        // mb={4}
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
        paddingBottom="2rem"
        // alignItems={"center"}
      >
        About Me
      </Heading>
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
          top: '5.5%'
        }}
      />
      
    </Box>
    <Typography
  variant="body1"
  sx={{
    marginTop: 2,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    color: "#800080", // Matches the accent color
  }}
>
"The biggest risk is not taking any risk... In a world that is changing really quickly,  
the only strategy that is guaranteed to fail is not taking risks." – Mark Zuckerberg
</Typography>
  </Box>
);

export default ProfileImageSection;
