import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const educationData = [
  {
    institution: "CODETRIBE ACADEMY",
    degree: "Digital Solutions Developer",
    duration: "JUNE 2024 - DEC 2024",
  },
  {
    institution: "DYNAMIC DNA",
    degree: "Microsoft:Azure Developer Associate",
    duration: "SEPT 2023 - JAN 2024",
  },
  {
    institution: "TSHWANE UNIVERSITY OF TECHNOLOGY",
    degree: "National Diploma: Information Technology",
    duration: "2019 - 2023",
  },
  {
    institution: "PROTEA GLEN SECONDARY",
    degree: "National Certificate",
    duration: "2013 - 2018",
  },
];

const EducationTimeline = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 3 }}>
        Education 
      </Typography>
      <Timeline position="alternate">
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>{edu.institution}</Typography>
              <Typography variant="body2" color="text.secondary">{edu.degree}</Typography>
              <Typography variant="caption" color="text.secondary">{edu.duration}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default EducationTimeline;
