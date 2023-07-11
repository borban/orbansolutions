import * as React from "react";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";

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

export default function Home() {
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
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Ben Orban
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  <Link href="tel:+16189175250" underline="hover">618-917-5250</Link>
                  <br/>
                  <Link href="mailto:ben@orbanfamily.org?subject=Concerning your qualifications" underline="hover">Email</Link>
                  <br/>
                  <Link href="https://github.com/borban/" target="new" underline="hover">GitHub</Link>
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
