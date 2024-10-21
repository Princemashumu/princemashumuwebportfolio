
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Popup from '../components/Popup';

const AboutPopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="About" content="Learn more about me." />
  );
};

export default AboutPopup;
