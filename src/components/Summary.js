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

export default function Summary() {
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
              Summary
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              I will help deliver value for your company, utilizing over nine
              years of enterprise software engineering experience and 15 years
              of professional experience in technology. I will help reduce lead
              times using DevOps, Agile, and Scrum principles within your
              organization. Specializing in Java technologies but having
              delivered several solutions using additional languages and
              frameworks throughout my career, I look forward to helping solve
              your toughest challenges.
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
