import * as React from "react";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Skills() {
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
                  Skills
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  <p><strong>Expert:</strong> Java, HTML, CSS, Git</p>
                  <p><strong>Advanced:</strong> JavaScript, JSP, Jakarta EE, JSF, IntelliJ, Jenkins, Weblogic, Linux, Maven</p>
                  <p><strong>Intermediate:</strong> PHP, BASH, PL/SQL, Spring Boot, ReactJS, Oracle DB, Postgres, Gradle, Junit</p>
                  <p><strong>Entry-Level:</strong> MongoDB, Selenium, AWS (EC2, S3, Lambda, Route 53, IAM, CloudFront)</p>

                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
