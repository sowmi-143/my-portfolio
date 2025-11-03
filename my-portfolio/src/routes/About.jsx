import React from "react";
import { Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1" color="text.secondary">
        I'm a frontend developer passionate about creating user-friendly web applications.
      </Typography>
    </Box>
  );
}
