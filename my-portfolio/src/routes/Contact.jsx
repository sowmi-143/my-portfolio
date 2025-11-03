import React from "react";
import { Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <ContactForm />
    </>
  );
}
