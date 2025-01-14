// components/SplashScreen.js
import React from 'react';
import Splash from '../components/Splash';

const SplashScreen = ({ showSplash }) => {
  return showSplash ? <Splash /> : null;
};

export default SplashScreen;
