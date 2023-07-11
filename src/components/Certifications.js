import * as React from "react";
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

export default function Certifications() {
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
                  Certifications
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  <Link href="https://www.credly.com/badges/2edc18c2-a8c5-46e7-a71a-8fcc1d8c05c0/public_url" target="new" underline="hover">AWS Certified Cloud Practitioner</Link>
                  <br />
                  <Link href="https://www.credly.com/badges/2c89a429-7ac2-407d-a05d-968f36fa5238/public_url" target="new" underline="hover">CompTIA Security+</Link>
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
