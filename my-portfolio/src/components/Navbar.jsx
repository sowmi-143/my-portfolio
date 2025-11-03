import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
          Home
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button component={RouterLink} to="/projects">Projects</Button>
          <Button component={RouterLink} to="/about">About</Button>
          <Button component={RouterLink} to="/contact" variant="outlined" sx={{ ml: 2 }}>Contact</Button>
        </Box>

        <IconButton sx={{ display: { md: "none" } }} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
