import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

import Providers from "./contexts/Providers";
import LoadingScreen from "./components/LoadingScreen";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import muiTheme from "./styles/MuiTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <ThemeProvider theme={muiTheme}>
    <CssBaseline />
      <LoadingScreen/>
      <App />
    </ThemeProvider> 
      
  </Providers>
);
