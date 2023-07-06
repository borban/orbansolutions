import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";
import JobEntry from "./JobEntry";

const defaultTheme = createTheme();

export default function Experience() {

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
            <JobEntry
            companyName="CACI Federal"
            jobTitle="Systems/Software Engineer T3"
            timeTracker={<TimeTracker targetDate={new Date("2020-02-18")} />}
            jobDescription={"Solicited new business with the USMC within the GCSS-MC program. The proof of concept supplied demonstrated the ability to submit in the field logistics tracking tasks while operating with no network connection. \n\n Successfully implemented a new claims module within a JSF logistics application. This included leading the integration of a file management feature for customers and government officials to submit, manage, and approve documentation throughout the lifecycle of a claim."}
          />
          <JobEntry
            companyName="Enterprise Holdings, Inc."
            jobTitle="Software Engineer II"
            timeTracker={<TimeTracker startDate={new Date("2016-02-18")} targetDate={new Date("2020-02-17")} />}
            jobDescription={"Implemented new features and resolved bugs within a portfolio of products in the Carshare department, such as API Gateway, Fleet Communicator, Renter Service Integration, Driver Qualification, and Rental Operations. \n\n Partook in multiple projects for the Daily Rental Operations department, including ECARS to Renter Service, ECARS Legacy Disconnect, PCI Compliance, Truck Telematics, and Central Bulk Payment."}
          />
          <JobEntry
            companyName="CACI Federal"
            jobTitle="Systems/Software Engineer T2"
            timeTracker={<TimeTracker startDate={new Date("2015-05-01")} targetDate={new Date("2016-02-01")} />}
            jobDescription="Helped maintain the DPS logistics application."
          />
          <JobEntry
            companyName="Hudson Bay Company"
            jobTitle="Associate Programmer Analyst"
            timeTracker={<TimeTracker startDate={new Date("2014-07-01")} targetDate={new Date("2015-05-01")} />}
            jobDescription="Maintained the e-commerce platform Sterling OMS and took on release manager responsibilities for customizations to the product. Also provided as-needed production support."
          />
          <JobEntry
            companyName="DPRA"
            jobTitle="Java Developer"
            timeTracker={<TimeTracker startDate={new Date("2014-01-01")} targetDate={new Date("2014-07-01")} />}
            jobDescription="Ensured a smooth transition from an original federal contractor to newly awarded CACI for the DPS program. Assisted in standing up infrastructure technologies while providing as-needed analysis for production support issues."
          />
          <JobEntry
            companyName="Savvis"
            jobTitle="Associate Engineer"
            timeTracker={<TimeTracker startDate={new Date("2012-12-01")} targetDate={new Date("2013-12-01")} />}
            jobDescription="Provided junior-level system administration support for clients using the company's cloud computing and hosting services. Helped support multiple Fortune 500 companies accomplish their goals and meet established SLA expectations."
          />
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
}