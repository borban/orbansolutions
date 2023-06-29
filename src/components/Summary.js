import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";

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
            ></Typography>
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
              years of enterprise software engineering experience and almost 15
              years of professional experience in technology. I will help reduce
              lead times using DevOps, Agile, and Scrum principles within your
              organization. Specializing in Java technologies but having
              delivered several solutions using additional languages and
              frameworks throughout my career, I look forward to helping solve
              your toughest challenges.
              <br />
              <br />
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Total Time Employed as a Software Engineer
              <br />
              <TimeTracker
                startDate={new Date("2014-01-01")}
                targetDate={new Date()}
              />
              <br />
              Total Time Employed in the Tech Industry
              <br />
              <TimeTracker
                startDate={new Date("2008-09-01")}
                targetDate={new Date()}
              />
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
