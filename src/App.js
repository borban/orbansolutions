import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./components/Home";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const components = [
    { label: "Home", component: <Home /> },
    { label: "Summary", component: <Summary /> },
    { label: "Skills", component: <Skills /> },
    { label: "Experience", component: <Experience /> },
    { label: "Education", component: <Education /> },
    { label: "Certifications", component: <Certifications /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppBar position="static">
          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  orientation="vertical"
                >
                  {components.map((component, index) => (
                    <Tab
                      key={index}
                      label={component.label}
                      sx={{
                        "&.Mui-selected": {
                          color: "#fff",
                        },
                      }}
                    />
                  ))}
                </Tabs>
              </SwipeableDrawer>
            </Box>
          ) : (
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              {components.map((component, index) => (
                <Tab
                  key={index}
                  label={component.label}
                  sx={{
                    "&.Mui-selected": {
                      color: "#fff",
                    },
                  }}
                />
              ))}
            </Tabs>
          )}
        </AppBar>
        <Container maxWidth="lg" sx={{ flex: 1, overflow: "auto" }}>
          {components[activeTab].component}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
