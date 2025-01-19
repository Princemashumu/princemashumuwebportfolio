import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import FooterComponent from './components/FooterComponent'; // Import FooterComponent

const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' for dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets browser defaults and applies theme styles */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterComponent /> {/* Add FooterComponent here */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
