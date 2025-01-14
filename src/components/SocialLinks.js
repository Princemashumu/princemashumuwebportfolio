// components/SocialLinks.js
import React from 'react';
import { Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const MotionBox = motion(Box);

const socialLinks = [
  { href: 'https://github.com/Princemashumu', label: 'GitHub', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/prince-ngwako-mashumu-77977924b/', label: 'LinkedIn', icon: <FaLinkedin /> },
  { href: 'https://www.facebook.com/princengwakomashumu', label: 'Facebook', icon: <FaFacebook /> },
  { href: 'https://www.twitter.com/princemashumu', label: 'Twitter', icon: <FaTwitter /> },
  { href: 'https://www.instagram.com/princengwakomashumu', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://wa.me/0682606328', label: 'WhatsApp', icon: <FaWhatsapp /> },
];

const SocialLinks = ({ iconSize, gapSize }) => (
  <Box
    position="fixed"
    top="9%"
    left="2%"
    transform="translateY(-50%)"
    zIndex={2}
    display="flex"
    flexDirection="column"
    alignItems="center"
    color="#70d6ff"
    gap={gapSize}
  >
    {socialLinks.map((social, index) => (
      <motion.div key={index} whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
        <Link
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          sx={{
            '&:hover': { color: '#fff', backgroundColor: '#70d6ff' },
            padding: 1,
            border: '1px solid #70d6ff',
            borderRadius: '25px',
            backgroundColor: '#000',
          }}
        >
          <Box sx={{ fontSize: iconSize }}>{social.icon}</Box>
        </Link>
      </motion.div>
    ))}
  </Box>
);

export default SocialLinks;