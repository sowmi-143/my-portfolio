import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6, minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
