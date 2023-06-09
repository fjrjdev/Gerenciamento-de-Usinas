import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm, useInput } from "lx-react-form";
import { PartnerContext } from "../../contexts/PartnerContext/PartnerContext";
import router from "../../routes";
import handleError from "../../utils/handleError";

const Login = () => {
  const { loginPartner } = React.useContext(PartnerContext);
  const email = useInput({
    name: "email",
    customValidations: [
      {
        regex:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        error: "Please enter a valid email address.",
      },
    ],
    errorText: {
      required: "This field is required",
    },
  });
  const password = useInput({
    name: "password",
    validation: "senha",
    errorText: {
      required: "This field is required",
      minLength: "Password must contain at least 8 characters",
    },
  });
  const form = useForm({
    formFields: [email, password],
    submitCallback: (formData) => {
      loginPartner(formData);
    },
  });
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
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={form.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            helperText={email.error}
            error={ handleError(email)}
            {...email.inputProps}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={password.error}
            {...password.inputProps}
            error={ handleError(password)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid item>
            <Link
              onClick={() => router.navigate("/register")}
              variant="body2"
              sx={{ cursor: "pointer" }}
            >
              {"Don't have an account? Register Now"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
