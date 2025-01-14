// components/CircleAnimation.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const CircleAnimation = ({ colors }) => (
  <MotionBox
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 1 }}
    mt={10}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      style={{ marginTop: "10px" }}
    >
      <Box as="span" width="10px" height="10px" bg={colors.secondaryAccent} borderRadius="50%" display="block" />
    </motion.div>
  </MotionBox>
);

export default CircleAnimation;
