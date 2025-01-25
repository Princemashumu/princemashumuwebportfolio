import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button); // Animated button

const ProfileSection = ({ colors }) => (
  <Box
    sx={{
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: { xs: "center", md: "flex-start" },
      justifyContent: "center",
      flexDirection: { xs: "column", md: "row" }, // Column for small screens, Row for large
      color: colors.primaryText,
      textAlign: { xs: "center", md: "left" },
      height: "100%",
      width: "100%",
      top: { xs: "13%", md: "22%" },
      left: { xs: 0, md: "4%" },
      paddingX: { xs: "5%", md: "9%" },
      paddingY: { xs: "2rem", md: "3rem" },
      gap: "4rem",
    }}
  >
    {/* Heading Section */}
    <MotionBox
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 5 }}
      sx={{
        flex: 1,
        maxWidth: "500px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Anta, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem", lg: "2rem" }, // Adjusted font sizes
          color: colors.primaryText,
          letterSpacing: { xs: "1px", md: "1px" },
          left: 0,
          marginBottom: "1rem",
          marginTop: "5rem",
        }}
      >
        Hi, I am a mobile & web Full Stack<br></br>
        <span style={{ color: colors.accent }}>Software Developer.</span>
      </Typography>

      {/* Contact Me Button */}
<Tooltip title="Send me an email">
      <Button
      
        variant="contained"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        sx={{backgroundColor: '#800080', borderRadius: '25px', fontFamily: 'Anta, sans-serif', fontWeight: 400, textTransform: 'none', px: 2, py: 1, fontSize: '0.9rem', '&:hover': { backgroundColor: '#993399' } }}
        onClick={() => window.location.href = "mailto:princengwakomashumu@gmail.com"}
      >
        Get In Touch
      </Button>
      </Tooltip>
    </MotionBox>

    {/* Profile Details Section */}
    <MotionBox
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: -5 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      sx={{
        flex: 1,
        maxWidth: "500px",
        fontFamily: "Anta, sans-serif",
        fontSize: { xs: "0.9rem", md: "1.125rem" },
        lineHeight: 1.8,
        letterSpacing: "1.5px",
        textAlign: { xs: "center", md: "left" },
        padding: { xs: 3, md: 5 },
        borderRadius: 2,
        borderRight: "10px solid purple",
        borderBottom: "10px solid purple",
        boxShadow: 5,
        left: "40%",
        transformOrigin: "center",
        overflow: "visible",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Full Name:</strong> Prince Ngwako Mashumu
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>CodeTribe Location:</strong> Soweto, Johannesburg
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Program Enrolled:</strong> Digital Solutions Developer
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Email:</strong> princengwakomashumu@gmail.com
      </Typography>
      <Typography mb={2}>
        <strong style={{ color: colors.accent }}>Phone:</strong> +27 68 260 6328
      </Typography>
      <Typography>
        <strong style={{ color: colors.accent }}>Date:</strong>{" "}
        {new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </Typography>
    </MotionBox>
  </Box>
);

export default ProfileSection;
