import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
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
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              CACI Federal
              <br />
              February 2020 - present 
              <br /><br />
              Systems/Software Engineer T3
              <br/>
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <li>
                Solicited new business with the USMC within the GCSS-MC program.
                The proof of concept supplied demonstrated the ability to
                submit in the field logistics tracking tasks while operating
                with no network connection.
              </li>
              <li>
                Successfully implemented a new claims module within a JSF
                logistics application. This included leading the integration of
                a file management feature for customers and government
                officials to submit, manage, and approve documentation
                throughout the lifecycle of a claim.
              </li>
              <li>
                Skills utilized: JSF, RESTful services, JUnit, Selenium,
                PL/SQL, HTML, CSS, JSP, JavaScript, Appian, Oracle EBS,
                Splunk, Java, Git, Postgres
              </li>
              <br/>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Enterprise Holdings, Inc.
              <br />
              February 2016 - February 2020
              <br /><br />
              Software Engineer II
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <li>
                Implemented new features and resolved bugs within a portfolio
                of products in the Carshare department, such as API Gateway,
                Fleet Communicator, Renter Service Integration, Driver
                Qualification, and Rental Operations.
              </li>
              <li>
                Partook in multiple projects for the Daily Rental Operations
                department, including ECARS to Renter Service, ECARS Legacy
                Disconnect, PCI Compliance, Truck Telematics, and Central Bulk
                Payment.
              </li>
              <li>
                Skills utilized: Java, HTML, CSS, JavaScript, SoapUI, Git,
                Spring Boot, PHP, React.js, Postman, Gradle, Git, Postgres
              </li>
              
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
              July 2014 - May 2015
              <br /><br />
              Associate Programmer Analyst
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <li>
                Maintained the e-commerce platform Sterling OMS and took on
                release manager responsibilities for customizations to the
                product. Also provided as-needed production support.
              </li>
              <li>Skills utilized: Sterling OMS, PL/SQL</li>
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
              January 2014 - July 2014
              <br /><br />
              Java Developer
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <li>
                Ensured a smooth transition from an original federal contractor
                to newly awarded CACI for the DPS program. Assisted in standing
                up infrastructure technologies while providing as-needed
                analysis for production support issues.
              </li>
              <li>
                Skills utilized: JSF, PL/SQL, HTML, CSS, JSP, JavaScript,
                Weblogic
              </li>
              <br />
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              <br />
              Savvis
              <br />
              December 2012 - December 2013
              <br /><br />
              Associate Engineer
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <li>
                Provided junior-level system administration support for clients
                using the company's cloud computing and hosting services.
                Helped support multiple Fortune 500 companies accomplish their
                goals and meet established SLA expectations.
              </li>
              <li>
                Skills utilized: Linux, Weblogic, Tomcat, Splunk, BASH,
                Atlassian
              </li>
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
