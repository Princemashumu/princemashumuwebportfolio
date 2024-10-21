// SkillsPopup.js
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Popup from '../components/Popup';

const SkillsPopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Skills" content="These are my skills." />
  );
};

export default SkillsPopup;
