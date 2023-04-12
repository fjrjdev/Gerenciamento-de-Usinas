import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PlantModal from "../../components/PlantModal";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard Partner
          </Typography>
          <Box component="div" sx={{ mr: 5, display: "flex" }}>
            <PlantModal />
            <PlantModal edit />
          </Box>
          <Link to={"/"} color="secondary">
              <Button variant='contained'color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
