import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSuccess("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_sd3ej6l",  // Replace with your EmailJS Service ID
        "template_tqoxrrf", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "BFVLUIdjpQHxA3W2m" // Replace with your EmailJS Public Key
      );
      
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccess("Failed to send message. Try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "auto",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "left", fontWeight: "bold", color: "#333" }}>
        Get in Touch
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "#f4f4f4",
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "#f4f4f4",
            },
          }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              backgroundColor: "#f4f4f4",
            },
          }}
        />
        {success && (
          <Typography variant="body2" color={success.includes("successfully") ? "green" : "red"}>
            {success}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            backgroundColor: "#800080",
            borderRadius: "25px",
            fontFamily: "Anta, sans-serif",
            fontWeight: 400,
            textTransform: "none",
            px: 2,
            py: 1,
            fontSize: "0.9rem",
            "&:hover": { backgroundColor: '#9dd5d4' },
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
