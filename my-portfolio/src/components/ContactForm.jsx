import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(true);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For quick demo: open mailto. Replace with API or Netlify Forms in production.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(form.message + "\n\nContact: " + form.email);
    window.location.href = `mailto:iamsowmiya.rajkumar@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
      <TextField label="Name" name="name" required value={form.name} onChange={handleChange} />
      <TextField label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
      <TextField label="Message" name="message" required multiline minRows={4} value={form.message} onChange={handleChange} />
      <Button type="submit" variant="contained">Send</Button>
      {sent && <div>Mail client opened — thanks!</div>}
    </Box>
  );
}
