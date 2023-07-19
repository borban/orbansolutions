import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";
import JobEntry from "./JobEntry";
import axios from "axios";

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

export default function Experience() {
  const [jobEntries, setJobEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jfngl4elog.execute-api.us-east-1.amazonaws.com/prod/job-entries');
        setJobEntries(response.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
                Experience
              </Typography>
            </motion.div>

            <Grid container spacing={2} justifyContent="center">
              {jobEntries.map((entry) => (
                <Grid item xs={12} sm={6} md={4} key={entry.id}>
                  <motion.div variants={childVariants}>
                    <JobEntry
                      companyName={entry.companyName}
                      jobTitle={entry.jobTitle}
                      timeTracker={
                        <TimeTracker
                          startDate={entry.startDate == null ? new Date() : new Date(entry.startDate)}
                          targetDate={new Date(entry.targetDate)}
                        />
                      }
                      jobDescription={entry.jobDescription}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </main>
    </ThemeProvider>
  );
}
