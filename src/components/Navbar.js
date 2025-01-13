import React, { useState } from 'react';
import {
  Navbar, Nav, Button, Tooltip, OverlayTrigger, Container,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsDownload } from 'react-icons/bs';
import logo from '../assets/letter-p.png';
import ProjectsPopup from '../components/ProjectsPopup';
import SkillsPopup from '../components/SkillsPopup';
import AboutPopup from '../components/AboutPopup';
import SplashLoader from '../components/Splash';
import AssesmentsPopup from './Assesmentspopup';

const NavbarComponent = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePopupClose = () => {
    setLoading(true);

    setTimeout(() => {
      setActivePopup(null);
      setLoading(false);
    }, 1000);
  };

  const handleNavClick = (target) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (target === 'home') {
        setActivePopup(null);
        navigate('/');
      } else {
        setActivePopup(target);
      }
    }, 1000);
  };

  return (
    <>
      {loading && <SplashLoader />}

      <Navbar bg="transparent" expand="lg" fixed="top" className="px-3" style={{ zIndex: 1000 }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
            <span
              style={{
                color: 'white',
                fontSize: '1rem', // Adjust font size for responsiveness
                letterSpacing: '3px',
                fontFamily: 'Anta, sans-serif',
                fontWeight: '500',
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('home')}
            >
              PRINCE MASHUMU
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav
              className="mx-auto text-center"
              style={{
                gap: '20px',
                fontFamily: 'Anta, sans-serif',
                fontWeight: '400',
              }}
            >
              {activePopup === null ? (
                ['home', 'projects', 'skills', 'assesments', 'about'].map((link) => (
                  <Nav.Link
                    key={link}
                    style={{
                      color: 'skyblue',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease, border-bottom 0.3s ease',
                      borderBottom: '2px solid transparent',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#b800ff';
                      e.currentTarget.style.borderBottom = '2px solid purple';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'skyblue';
                      e.currentTarget.style.borderBottom = '2px solid transparent';
                    }}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Nav.Link>
                ))
              ) : (
                <Nav.Link
                  style={{
                    color: 'skyblue',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease, border-bottom 0.3s ease',
                    borderBottom: '2px solid transparent',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'purple';
                    e.currentTarget.style.borderBottom = '2px solid purple';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'skyblue';
                    e.currentTarget.style.borderBottom = '2px solid transparent';
                  }}
                  onClick={handlePopupClose}
                >
                  Close {activePopup}
                </Nav.Link>
              )}
            </Nav>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip">Download resume</Tooltip>}
            >
              <Button
                as="a"
                href="https://drive.google.com/file/d/1GkJPUaG0j9Ncxv4fmymH-qtUt8Nd55YW/view?usp=drive_link"
                download
                variant="primary"
                style={{
                  backgroundColor: '#800080',
                  borderColor: '#800080',
                  color: 'white',
                  borderRadius: '25px',
                  fontFamily: 'Anta, sans-serif',
                  fontWeight: '400',
                  padding: '10px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem', // Adjust font size for smaller screens
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#993399')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#800080')}
              >
                <BsDownload size={18} /> Resume
              </Button>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activePopup === 'projects' && <ProjectsPopup isOpen onClose={handlePopupClose} />}
      {activePopup === 'skills' && <SkillsPopup isOpen onClose={handlePopupClose} />}
      {activePopup === 'about' && <AboutPopup isOpen onClose={handlePopupClose} />}
      {activePopup === 'assesments' && <AssesmentsPopup isOpen onClose={handlePopupClose} />}
    </>
  );
};

export default NavbarComponent;
