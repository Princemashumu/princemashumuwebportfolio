import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from './ProjectsNavbar';
import IndividualProjects from './IndividualProjects';
import GroupProjects from './GroupProjects';

// Import the JSON file
import projectsData from './projects.json';

const ProjectsPopup = ({ isOpen, onClose }) => {
  const [individualProjects, setIndividualProjects] = useState([]);
  const [groupProjects, setGroupProjects] = useState([]);

  // Fetching the data from the imported JSON
  useEffect(() => {
    if (projectsData) {
      setIndividualProjects(projectsData.individualProjects);
      setGroupProjects(projectsData.groupProjects);
    }
  }, []);

  return (
    isOpen && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor:' rgb(23,25,35)',
          color: 'white',
          zIndex: 1050,
          overflowY: 'auto',
        }}
      >
        <NavbarComponent />
        <IndividualProjects projects={individualProjects} />
        <GroupProjects projects={groupProjects} />
        <Button variant="secondary" onClick={onClose} style={{ margin: '20px auto', display: 'block' }}>
          Close
        </Button>
      </div>
    )
  );
};

export default ProjectsPopup;
