import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip, CardActions, Button } from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="180" image={project.image} alt={project.title} loading="lazy" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">{project.description}</Typography>
        <div style={{ marginTop: 8 }}>
          {project.tech.map(t => <Chip key={t} label={t} size="small" sx={{ mr: 0.5 }} />)}
        </div>
      </CardContent>
      <CardActions>
        {project.live ? <Button size="small" href={project.live} target="_blank">Live</Button> : null}
        {project.repo ? <Button size="small" href={project.repo} target="_blank">Code</Button> : null}
      </CardActions>
    </Card>
  );
}
