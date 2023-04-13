import { dark } from "@mui/material/styles/createPalette";
import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#666666",
    },
  },
});

export default MuiTheme;
