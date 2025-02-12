import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';




const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f1f1f",
        color: "white",
        padding: "40px 0",
        borderTopLeftRadius:"25px",
        borderTopRightRadius:"25px"
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
        >
          {/* About Us Section (Left) */}
          <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Welcome to my personal portfolio. I specialize in web development,
              software engineering, and mobile app development. I am a passionate
              tech enthusiast who loves to learn.
            </Typography>
          </Grid>

          {/* Contact Info Section (Middle) */}
          <Grid item xs={12} md={4} sx={{ textAlign: "left"}}>
            <Typography variant="h6" sx={{ fontWeight: "bold"}}>
              Contact Us
            </Typography>
            <Typography >Email: <Link href="mailto:Princengwakomashumu@gmail.com" color="inherit">Princengwakomashumu@gmail.com</Link></Typography>
            <Typography>Phone: <Link href="tel:+27682606328" color="inherit">+27 68 260 6328</Link></Typography>
            <Typography>
              Address: 22791 Naartjie Cres Ext 26, Soweto, South Africa
            </Typography>
          </Grid>

          {/* Social Media Section (Middle) */}
          <Grid item xs={12} md={4} sx={{ textAlign: "left", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Social Media
            </Typography>
            <Typography sx={{ paddingBottom: "10px" }}>
              <Link href='https://www.linkedin.com/in/prince-ngwako-mashumu-77977924b/' color="inherit">
              <FaLinkedin size={20}/>
              </Link>
            </Typography >
            <Typography sx={{ paddingBottom: "10px" }}>
            <Link href='https://github.com/Princemashumu' color="inherit">
            <FaGithub size={20}/>
            </Link>
            </Typography>
            <Typography sx={{ paddingBottom: "10px" }}>
            <Link href='https://wa.me/0682606328' color="inherit">
            <FaWhatsapp size={20}/>
            </Link>
            </Typography>
          </Grid>

          {/* Map Section (Right) */}
          {/* <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <Box
              sx={{
                width: "100%",
                height: 200,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
              }}
            >
              <MapContainer
                center={position}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    <strong>22791 Naartjie Cres, Soweto</strong>
                  </Popup>
                </Marker>
              </MapContainer>
            </Box>
          </Grid> */}
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid gray", pt: 2 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Prince Ngwako Mashumu. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
