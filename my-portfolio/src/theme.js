import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#90beecff" }, // blue
    secondary: { main: "#5b0536ff" }, // orange
    background: { default: "#357b89ff" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: "2rem", fontWeight: 700 },
  },
});

export default theme;
