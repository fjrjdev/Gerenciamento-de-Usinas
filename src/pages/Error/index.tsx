import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import router from "../../routes";
export const PageError = () => {
  const onclick = () => {
    router.navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h1">
          Some error has occurred!
        </Typography>
        <Typography component="h1" variant="h5">
          Verify that the URL is correct and try again.
        </Typography>

        <Button onClick={onclick} sx={{ mt: 5 }} variant="contained">
          Go back to home page
        </Button>
      </Box>
    </Container>
  );
};

export default PageError;
