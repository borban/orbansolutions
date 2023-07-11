import * as React from "react";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";

const defaultTheme = createTheme();

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={childVariants}>
                <Typography
                  component="h2"
                  variant="h3"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Summary
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
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
              </motion.div>
              <motion.div variants={childVariants}>
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
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
