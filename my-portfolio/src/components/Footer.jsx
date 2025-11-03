import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider", mt: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {year} Your Name — Built with React + MUI
        </Typography>
      </Container>
    </Box>
  );
}
