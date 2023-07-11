import React from "react";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";

// TODO remove, this demo shouldn't need to reset the theme.
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
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={childVariants}>
                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Education
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
                <Typography
                  variant="h4"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  <Link href="https://www.parchment.com/u/award/3b8faf69285eff2376e37bff52a9950f" target="new" underline="hover">Bachelor of Science in Software Development, Bellevue University</Link>
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
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
                  Foundation of Software Development <br />
                  Introduction to Programming with Python <br />
                  Database Development and Use <br />
                  Programming with Java <br /><br />
                </Typography>
              </motion.div>

              <motion.div variants={childVariants}>
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
                  Web Development with HTML and CSS <br />
                  Interactive Development with JavaScript <br /><br />
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
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
                  Intermediate and Advanced Java Programming <br />
                  DevOps <br />
                  Server-Side Development <br />
                  Server-Side Scripting <br />
                  Capstone in Software Development
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
