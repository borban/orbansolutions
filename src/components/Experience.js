import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";
import JobEntry from "./JobEntry";
import { API } from "aws-amplify";
import { listJobEntries } from "../graphql/queries";

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
      const sortedJobEntries = entries.sort((a, b) =>
        b.targetDate.localeCompare(a.targetDate)
      );
      setJobEntries(sortedJobEntries);
    } catch (error) {
      console.error("Error fetching job entries:", error);
    }
  };

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
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Experience
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 8,
              width: "100%",
              maxWidth: 1200,
              padding: "0 16px",
              boxSizing: "border-box",
            }}
          >
            {jobEntries.map((entry) => (
              <JobEntry
                key={entry.id}
                companyName={entry.companyName}
                jobTitle={entry.jobTitle}
                timeTracker={
                  <TimeTracker
                    startDate={
                      entry.startDate == null ? new Date() : new Date(entry.startDate)
                    }
                    targetDate={new Date(entry.targetDate)}
                  />
                }
                jobDescription={entry.jobDescription}
              />
            ))}
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
}