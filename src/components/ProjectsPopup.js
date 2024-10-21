// ProjectsPopup.js
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Popup from '../components/Popup';

const ProjectsPopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Projects" content="Here are some of my projects." />
  );
};

export default ProjectsPopup;
