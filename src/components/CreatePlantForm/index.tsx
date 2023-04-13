import React from "react";
import { useForm, useInput } from "lx-react-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";



const CreatePlantForm = () => {
  const { registerPlant, setCModal } = React.useContext(PlantsContext);
  const name = useInput({
    name: "name",
    errorText: {
      required: "This field is required",
    },
  });
  const cep = useInput({
    name: "cep",
    errorText: {
      required: "This field is required",
    },
  });
  const latitude = useInput({
    name: "latitude",
    errorText: {
      required: "This field is required",
    },
  });
  const longitude = useInput({
    name: "longitude",
    errorText: {
      required: "This field is required",
    },
  });
  const maximum_capacity_GW = useInput({
    name: "maximum_capacity_GW",
    errorText: {
      required: "This field is required",
    },
  });

  const form = useForm({
    formFields: [name, cep, latitude, longitude, maximum_capacity_GW],
    submitCallback: (formData) => {
      registerPlant(formData);
    },
  });
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={form.handleSubmit}
        noValidate
        sx={{ mt: 1, bgcolor: "white", maxWidth: 500, p: 2 }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="h1" variant="h5">
            Register New Plant
          </Typography>
          <button type="button" onClick={() => setCModal(false)}>
            <CloseIcon />
          </button>
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          autoComplete="name"
          helperText={name.error}
          {...name.inputProps}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="cep"
          label="CEP"
          autoComplete="cep"
          helperText={cep.error}
          {...cep.inputProps}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="latitude"
          label="latitude"
          autoComplete="latitude"
          helperText={latitude.error}
          {...latitude.inputProps}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="longitude"
          label="longitude"
          autoComplete="longitude"
          helperText={longitude.error}
          {...longitude.inputProps}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="maximum_capacity_GW"
          label="Maximum GW Capacity"
          autoComplete="maximum_capacity_GW"
          helperText={maximum_capacity_GW.error}
          {...maximum_capacity_GW.inputProps}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePlantForm;
