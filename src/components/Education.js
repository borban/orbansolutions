import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
            bgcolor: "background.paper",
            py: 4,
          }}
        >
          <Container maxWidth="lg">
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
              Bachelor's of Science in Software Development, Bellevue University
              <br />
              <br />
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Foundation of Software Development
              <br/>
              Introduction to Programming with Python
              <br/>
              Database Development and Use
              <br/>
              Programming with Java
              <br/>
              Web Development with HTML and CSS
              <br/>
              Intermediate Java Programming
              <br/>
              Interactive Development with JavaScript
              <br/>
              Advanced Java Programming
              <br/>
              DevOps
              <br/>
              Server-Side Development
              <br/>
              Server-Side Scripting
              <br/>
              Capstone in Software Development
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
