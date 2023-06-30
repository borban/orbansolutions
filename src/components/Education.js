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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
            bgcolor: "background.paper",
            py: 8,
            px: 4,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Education
            </Typography>

            <Typography
              variant="h4"
              align="center"
              color="text.secondary"
              paragraph
            >
              Bachelor's of Science in Software Development, Bellevue University
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              Coursework
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
            >
              Foundation of Software Development <br/>
              Introduction to Programming with Python <br/>
              Database Development and Use <br/>
              Programming with Java <br/><br/>
            </Typography>
            
            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              Web Technologies
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
            >
              Web Development with HTML and CSS <br/>
              Interactive Development with JavaScript <br/><br/>
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              Advanced Topics
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
            >
              Intermediate and Advanced Java Programming <br/>
              DevOps <br/>
              Server-Side Development <br/>
              Server-Side Scripting <br/>
              Capstone in Software Development
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
