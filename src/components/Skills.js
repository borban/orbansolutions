import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Skills() {
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
              Skills
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="text.secondary"
              component="ul"
            >
              <li>Languages: Java, JavaScript, HTML, CSS, PHP, BASH, JSP, PL/SQL</li>
              <li>Frameworks/Libraries: Spring Boot, Jakarta EE, React.js, JSF</li>
              <li>
                Databases: Oracle, MySQL, MongoDB, Postgres
              </li>
              <li>
                Tools: IntelliJ, Maven, Gradle, Git, Jenkins, Postman, SoapUI, JUnit, Splunk, Selenium
              </li>
              <li>
                Infrastructure: AWS (EC2, S3, Lambda, Route 53, IAM, CloudFront), Weblogic, Tomcat, Linux
              </li>
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
