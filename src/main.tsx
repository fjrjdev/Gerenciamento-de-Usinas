import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

import Providers from "./contexts/Providers";
import LoadingScreen from "./components/LoadingScreen";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
      <CssBaseline />
      <LoadingScreen/>
      <App />
  </Providers>
);
