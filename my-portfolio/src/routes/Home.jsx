import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  Chip,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        py: 6,
        px: 2,
        maxWidth: 800,
        mx: "auto",
      }}
    >
      {/* Name and Intro */}
      <Typography variant="h3" component="h1" textAlign="center">
        Hi, I'm Sowmiya — Frontend Developer
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        I build accessible, responsive user interfaces with React and Material UI.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/projects">
        My Projects
      </Button>

      <Divider sx={{ width: "100%" }} />

      {/* Recent Projects */}
      <Typography variant="h5">Recent Projects</Typography>
      <Typography variant="body1" textAlign="center">
        ✅ <strong>Login/Signup Form</strong>: Responsive form with MUI, validation, and GitHub Pages deployment.
      </Typography>
      <Typography variant="body1" textAlign="center">
        ✅ <strong>My portfolio</strong>: portfolio website built with React and MUI showcasing my skills.
      </Typography>
      <Typography variant="body1" textAlign="center">
        ✅ <strong>Table Content Form</strong>: A dynamic table content form built with React.
      </Typography>

      <Divider sx={{ width: "100%" }} />

     {/* Skills Section */}
<Typography variant="h4" gutterBottom>Skills</Typography>
<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1, mb: 3 }}>
  {["HTML", "CSS", "JavaScript", "React", "MUI", "Vite"].map((skill) => (
    <Chip key={skill} label={skill} color="primary" />
  ))}
</Box>

{/* Tools Section */}
<Typography variant="h4" gutterBottom>Tools</Typography>
<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
  {["Github", "git", "VSCode", "Netlify"].map((tool) => (
    <Chip key={tool} label={tool} color="secondary" />
  ))}
</Box>

      <Divider sx={{ width: "100%" }} />

      {/* Contact */}
      <Typography variant="h5">Contact</Typography>
      <Typography variant="body1" textAlign="center">
        📧 Email: iamsowmiya.rajkumar@gmail.com <br />
        🌐Portfolio: https://github.com/sowmi-143 <br />
        🌐Linkedin: www.linkedin.com/in/sowmiya-r-a17a05351
      </Typography>

      {/* Availability Card */}
      <Card sx={{ p: 3, textAlign: "center", mt: 2 }}>
        <Typography variant="subtitle1">Jobs</Typography>
        <Typography variant="body2">
          Frontend Developer / full-time work <br />
            Available for hire! Let's connect.
        </Typography>
      </Card>
    </Box>
  );
}