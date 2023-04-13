import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import PlantModal from "../../components/PlantModal";
import React from "react";
import { PartnerContext } from "../../contexts/PartnerContext/PartnerContext";

const Nav = () => {
  const { logout } = React.useContext(PartnerContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: {xs: 0, sm: 1} }}>
            Dashboard Partner
          </Typography>
          <Box component="div" sx={{ mr: 5, display: "flex", gap: 2 }}>
            <PlantModal />
            <PlantModal edit />
          </Box>
          <Button variant="outlined" color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
