import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Education() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Education
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              component="h6"
            >
                Bachelor of Science in Software Development, Bellevue University
                <br/>
              </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <br/>
              <li>Foundation of Software Development</li>
              <li>Introduction to Programming with Python</li>
              <li>Database Development and Use</li>
              <li>Programming with Java</li>
              <li>Web Development with HTML and CSS</li>
              <li>Intermediate Java Programming</li>
              <li>Interactive Development with JavaScript</li>
              <li>Advanced Java Programming</li>
              <li>DevOps</li>
              <li>Server-Side Development</li>
              <li>Server-Side Scripting</li>
              <li>Capstone in Software Development</li>
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
