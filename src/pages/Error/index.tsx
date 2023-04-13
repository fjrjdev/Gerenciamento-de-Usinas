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
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography component="h1" variant="h1">
          404
        </Typography>
        <Typography component="h1" variant="h3">
          Page not Found
        </Typography>
        <Typography component="h1" variant="h5">
          Verify that the URL is correct and try again.
        </Typography>
        <Button onClick={onclick} variant="contained">
          Go back to home page
        </Button>
      </Box>
    </Container>
  );
};

export default PageError;
