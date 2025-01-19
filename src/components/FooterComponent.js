import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Typography, Container } from "@mui/material";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToString } from "react-dom/server";

// Convert React Icon to an SVG string for Leaflet marker
const customIcon = new L.DivIcon({
  html: renderToString(<FaMapMarkerAlt size={40} color="red" />),
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const Footer = () => {
  const position = [-26.2805, 27.8494]; // Coordinates for 22791 Naartjie Cres, Soweto

  return (
    <Box
      sx={{
        backgroundColor: "#1f1f1f",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Info (Left) */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography>Email: Princengwakomashumu@gmail.com</Typography>
          <Typography>Phone: +27 68 260 6328</Typography>
          <Typography>
            Address: 22791 Naartjie Cres Ext 26, Soweto, South Africa
          </Typography>
        </Box>

        {/* Map (Right) */}
        <Box
          sx={{
            width: 250, // Square size
            height: 250,
            flexShrink: 0, // Prevent shrinking
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
      </Container>
    </Box>
  );
};

export default Footer;
