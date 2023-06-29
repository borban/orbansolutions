import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTracker from "./TimeTracker";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Experience() {
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
          <Typography
            component="h4"
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            CACI Federal
            <br />
            Systems/Software Engineer T3
            <TimeTracker
              startDate={new Date()}
              targetDate={new Date("2020-02-18")}
            />
          </Typography>
          <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >

              Solicited new business with the USMC within the GCSS-MC program.
              The proof of concept supplied demonstrated the ability to submit
              in the field logistics tracking tasks while operating with no
              network connection.
<br/><br/>
              Successfully implemented a new claims module within a JSF
              logistics application. This included leading the integration of a
              file management feature for customers and government officials to
              submit, manage, and approve documentation throughout the lifecycle
              of a claim.
            <br />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Enterprise Holdings, Inc.
            <br />
            Software Engineer II
            <TimeTracker
              startDate={new Date("2016-02-18")}
              targetDate={new Date("2020-02-17")}
            />
          </Typography>
          <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
            
              Implemented new features and resolved bugs within a portfolio of
              products in the Carshare department, such as API Gateway, Fleet
              Communicator, Renter Service Integration, Driver Qualification,
              and Rental Operations.
<br/><br/>
              Partook in multiple projects for the Daily Rental Operations
              department, including ECARS to Renter Service, ECARS Legacy
              Disconnect, PCI Compliance, Truck Telematics, and Central Bulk
              Payment.

            <br />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            CACI Federal
            <br />
            Systems/Software Engineer T2
            <TimeTracker
              startDate={new Date("2015-05-01")}
              targetDate={new Date("2016-02-01")}
            />
          </Typography>
          <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
            Helped maintain the DPS logistics application.
            <br />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <br />
            Hudson Bay Company
            <br />
            Associate Programmer Analyst
            <TimeTracker
              startDate={new Date("2014-07-01")}
              targetDate={new Date("2015-05-01")}
            />
          </Typography>
          <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Maintained the e-commerce platform Sterling OMS and took on
              release manager responsibilities for customizations to the
              product. Also provided as-needed production support.
            <br />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <br />
            DPRA
            <br />
            Java Developer
            <TimeTracker
              startDate={new Date("2014-01-01")}
              targetDate={new Date("2014-07-01")}
            />
          </Typography>
          <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Ensured a smooth transition from an original federal contractor to
              newly awarded CACI for the DPS program. Assisted in standing up
              infrastructure technologies while providing as-needed analysis for
              production support issues.
            <br />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Savvis
            <br />
            Associate Engineer
            <TimeTracker
              startDate={new Date("2012-12-01")}
              targetDate={new Date("2013-12-01")}
            />
          </Typography>
          <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Provided junior-level system administration support for clients
              using the company's cloud computing and hosting services. Helped
              support multiple Fortune 500 companies accomplish their goals and
              meet established SLA expectations.
            <br />
          </Typography>
        </Box>
      </main>
    </ThemeProvider>
  );
}
