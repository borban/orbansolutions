import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";
import MyJobEntries from "./JobEntry";
import { API } from "aws-amplify";
import { listJobEntries } from "../graphql/queries";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Experience() {
  const [jobEntries, setJobEntries] = useState([]);

  useEffect(() => {
    fetchJobEntries();
  }, []);

  const fetchJobEntries = async () => {
    try {
      const apiResponse = await API.graphql({ query: listJobEntries });
      const entries = apiResponse.data.listJobEntries.items;
      // Sort job entries in descending order based on targetDate
      const sortedJobEntries = entries.sort((a, b) => b.targetDate.localeCompare(a.targetDate));
      setJobEntries(sortedJobEntries);
    } catch (error) {
      console.error("Error fetching job entries:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 2,
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Experience
          </Typography>

          {jobEntries.map((entry) => (
            <MyJobEntries
              key={entry.id} // Make sure to provide a unique key for each item in the list
              companyName={entry.companyNam}
              jobTitle={entry.jobTitle}
              timeTracker={
                <TimeTracker
                  startDate={entry.startDate == null ? new Date() : new Date(entry.startDate)}
                  targetDate={new Date(entry.targetDate)}
                />
              }
              jobDescription={entry.jobDescription}
            />
          ))}
        </Box>
      </main>
    </ThemeProvider>
  );
}
