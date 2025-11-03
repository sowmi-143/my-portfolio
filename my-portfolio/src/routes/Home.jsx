import React from "react";
import { Box, Typography, Button, Grid, Card } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Hi, I'm Your Name — Frontend Developer
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I build accessible, responsive user interfaces with React and Material UI.
          </Typography>
          <Button variant="contained" component={RouterLink} to="/projects">See my work</Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1">Brief</Typography>
            <Typography variant="body2">Available for freelance / full-time work. Email: you@domain.com</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
