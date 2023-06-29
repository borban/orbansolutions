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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
            bgcolor: "background.paper",
            py: 4,
          }}
        >
          <Container maxWidth="lg">
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
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Java, JavaScript, HTML, CSS, PHP, BASH, JSP, PL/SQL
              <br />
              Spring Boot, Jakarta EE, React.js, JSF
              <br />
              Oracle, MySQL, MongoDB, Postgres
              <br />
              IntelliJ, Maven, Gradle, Git, Jenkins, Postman, SoapUI, JUnit,
              Splunk, Selenium
              <br />
              AWS (EC2, S3, Lambda, Route 53, IAM, CloudFront), Weblogic,
              Tomcat, Linux
              <br />
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
