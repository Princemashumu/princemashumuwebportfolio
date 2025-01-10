import React, { useState } from 'react';
import {
  Navbar, Nav, Button, Tooltip, OverlayTrigger, Container,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/letter-p.png';
import ProjectsPopup from '../components/ProjectsPopup';
import SplashLoader from '../components/Splash';
import { BsDownload } from 'react-icons/bs';


const NavbarComponent = () => {
  const [activePopup, setActivePopup] = useState(null); // Single state for managing the active popup
  const [loading, setLoading] = useState(false); // Loading state for splash loader
  const navigate = useNavigate();

  const handlePopupClose = () => {
    setActivePopup(null); // Close all popups
  };

  const handleNavClick = (target) => {
    setLoading(true); // Show splash loader before navigating or opening popups

    setTimeout(() => {
      setLoading(false); // Hide loader after delay

      if (target === 'home') {
        setActivePopup(null); // Close all popups when navigating to Home
        navigate('/'); // Navigate to Home
      } else {
        setActivePopup(target); // Open the popup if it's not the Home link
      }
    }, 1000); // 1 second delay before action
  };

  return (
    <>
      {/* Splash Loader */}
      {loading && <SplashLoader />}

      <Navbar bg="transparent" expand="lg"  className="px-4" style={{ zIndex: -1 , position: 'static'}}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="40" />
            <span style={{ color: 'white', letterSpacing: '6px', fontFamily: 'Anta, sans-serif', fontWeight: '500' }} onClick={() => handleNavClick('home')}>
              RINCE MASHUMU
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav className="mx-auto" style={{ gap: '50px', fontFamily: 'Anta, sans-serif', fontWeight: '400' }}>
              {activePopup === null ? (
                <>
    
                  {/*  */}
                 
                </>
              ) : (
                // Render close buttons when a popup is active
                <>
                  <Nav.Link style={{ color: 'skyblue' }} onClick={() => handlePopupClose()}>
                    Close {activePopup}
                  </Nav.Link>
                </>
              )}
            </Nav>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip">Download resume</Tooltip>}
            >
              <Button
  as="a"
  href="https://drive.google.com/uc?export=download&id=112u74R9KDHlTPyegWofwC9KZtFTpTCBq"
  download
  variant="primary"
  style={{
    backgroundColor: '#800080',
    borderColor: '#800080',
    color: 'white',
    borderRadius: '25px',
    fontFamily: 'Anta, sans-serif',
    fontWeight: '400',
    padding: '10px 20px', // Add padding for better spacing
    display: 'flex', // Ensure proper alignment
    alignItems: 'center',
    gap: '8px', // Space between icon and text
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#993399')}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#800080')}
>
  <BsDownload size={20} style={{ marginRight: '5px' }} /> {/* Icon with size */}
   Resume
</Button>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Popup Components */}
      {activePopup === 'goals' && <ProjectsPopup isOpen onClose={handlePopupClose} />}
    </>
  );
};

export default NavbarComponent;
