import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import { useForm, useInput } from "lx-react-form";
import { PartnerContext } from "../../contexts/PartnerContext/PartnerContext";
import router from "../../routes";
import handleError from "../../utils/handleError";

const Register = () => {
  const { registerPartner } = React.useContext(PartnerContext);
  const name = useInput({
    name: "name",
    errorText: {
      required: "This field is required",
    },
  });
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
  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
    errorText: {
      required: "This field is required",
    },
  });

  const cnpj = useInput({
    name: "cnpj",
    customValidations: [
      {
        regex: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/,
        error: "Please enter a valid CNPJ format: 00.000.800/0000-00",
      },
    ],
    errorText: {
      required: "This field is required",
    },
  });

  const form = useForm({
    formFields: [name, cnpj, email, password],
    submitCallback: (formData) => {
      registerPartner(formData);
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
          <HowToRegIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
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
            id="name"
            label="Name"
            autoComplete="name"
            helperText={name.error}
            error={ handleError(name)}
            {...name.inputProps}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cnpj"
            label="CNPJ"
            autoComplete="cnpj"
            helperText={cnpj.error}
            error={ handleError(cnpj)}
            {...cnpj.inputProps}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
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
            error={ handleError(password)}
            {...password.inputProps}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            helperText={confirmPassword.error}
            error={ handleError(confirmPassword)}
            {...confirmPassword.inputProps}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid item>
            <Link
              onClick={() => router.navigate("/")}
              variant="body2"
              sx={{ cursor: "pointer" }}
            >
              {"Back to home"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
