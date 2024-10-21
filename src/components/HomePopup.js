// HomePopup.js
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Popup from '../components/Popup';

const HomePopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Home" content="Welcome to the Home page!" />
  );
};

export default HomePopup;
