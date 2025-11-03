import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
