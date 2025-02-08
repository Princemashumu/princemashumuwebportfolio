import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const MotionButton = motion(Button); // Animated button

const ProfileSection = ({ colors }) => {
  const titles = [
    "Software Developer",
    "Backend Developer",
    "Frontend Developer",
    "Mobile Developer",
    "Website Developer",
  ]; // Titles to loop

  const [index, setIndex] = useState(0);

  // Cycle through titles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
  
    return () => clearInterval(interval);
  }, [titles.length]);
  

  return (
    <Container
      sx={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
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
      <Box sx={{ flex: 1, maxWidth: "500px" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Anta, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem", lg: "1.3rem" },
            color: "#333333",
            letterSpacing: { xs: "1px", md: "1px" },
            marginBottom: "1rem",
            marginTop: "4rem",
          }}
        >
          Hi, My name is Prince Mashumu.<br></br> I am a Junior  
          {"  "}
          <motion.span
            key={titles[index]} // Re-animate when text changes
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            style={{ color: colors.accent }}
          >
            {titles[index]}
          </motion.span>
        </Typography>

        {/* Contact Me Button */}
        <Tooltip title="Send me an email">
          <MotionButton
            variant="contained"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              backgroundColor: "#800080",
              borderRadius: "25px",
              fontFamily: "Anta, sans-serif",
              fontWeight: 400,
              textTransform: "none",
              px: 2,
              py: 1,
              fontSize: "0.9rem",
              "&:hover": { backgroundColor: colors.accent },
            }}
            onClick={() =>
              (window.location.href = "mailto:princengwakomashumu@gmail.com")
            }
          >
            Get In Touch
          </MotionButton>
        </Tooltip>
      </Box>

      {/* Profile Details Section */}
      <Box
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
          border: "2px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          background: `
            linear-gradient(145deg, rgba(50, 50, 50, 0.9), rgba(20, 20, 20, 0.9)), 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 10px, transparent 10px, transparent 20px)
          `,
          backdropFilter: "blur(10px)",
          borderBottom: "10px solid #C4DFDF",
            transform: 'rotate(-5deg)', // Tilting the box by -5 degrees
            transition: 'transform 0.5s ease-in-out', // Smooth transition for tilt effect
        }}
      >
        <Typography mb={2} sx={{ color: "#ffffff" }}>
          <strong style={{ color: colors.accent }}>CodeTribe Location:</strong>{" "}
          Soweto, Johannesburg
        </Typography>
        <Typography mb={2} sx={{ color: "#ffffff" }}>
          <strong style={{ color: colors.accent }}>Program Enrolled:</strong>{" "}
          Digital Solutions Developer
        </Typography>
        <Typography mb={2} sx={{ color: "#ffffff" }}>
          <strong style={{ color: colors.accent }}>Email:</strong>{" "}
          princengwakomashumu@gmail.com
        </Typography>
        <Typography mb={2} sx={{ color: "#ffffff" }}>
          <strong style={{ color: colors.accent }}>Phone:</strong> +27 68 260
          6328
        </Typography>
        <Typography sx={{ color: "#ffffff" }}>
          <strong style={{ color: colors.accent }}>Date:</strong>{" "}
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfileSection;
