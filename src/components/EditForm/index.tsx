import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm, useInput } from "lx-react-form";
import React from "react";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";

const EditForm = ({ props }: any) => {
  const { patchPlant, deletePlant } = React.useContext(PlantsContext);
  const [select, setSelect] = React.useState(true);
  const name = useInput({
    name: "name",
    initialValue: props.plant.name + "",
    errorText: {
      required: "This field is required",
    },
  });
  const cep = useInput({
    name: "cep",
    mask: "cep",
    initialValue: props.plant.cep + "",
    errorText: {
      required: "This field is required",
    },
  });
  const latitude = useInput({
    name: "latitude",
    initialValue: props.plant.latitude + "",
    errorText: {
      required: "This field is required",
    },
  });
  const longitude = useInput({
    name: "longitude",
    initialValue: props.plant.longitude + "",
    errorText: {
      required: "This field is required",
    },
  });
  const maximum_capacity_GW = useInput({
    name: "maximum_capacity_GW",
    initialValue: props.plant.maximum_capacity_GW + "",
    errorText: {
      required: "This field is required",
    },
  });

  const form = useForm({
    formFields: [name, cep, latitude, longitude, maximum_capacity_GW],
    clearFields: true,
    submitCallback: (formData) => {
      setSelect(false);
      if (!select) {
        patchPlant(formData);
        setSelect(true)
      }
    },
  });
  return (
    <Box component="form" onSubmit={form.handleSubmit} noValidate>
      <Button type="submit" color="secondary" variant="contained">
        Select Plant
      </Button>
      <TextField
        {...name.inputProps}
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        helperText={name.error}
        disabled={select}
      />
      <TextField
        {...cep.inputProps}
        margin="normal"
        required
        fullWidth
        id="cep"
        label="CEP"
        helperText={cep.error}
        disabled={select}
      />
      <TextField
        {...latitude.inputProps}
        margin="normal"
        required
        fullWidth
        id="latitude"
        label="latitude"
        helperText={latitude.error}
        disabled={select}
      />
      <TextField
        {...longitude.inputProps}
        margin="normal"
        required
        fullWidth
        id="longitude"
        label="longitude"
        helperText={longitude.error}
        disabled={select}
      />
      <TextField
        {...maximum_capacity_GW.inputProps}
        margin="normal"
        required
        fullWidth
        id="maximum_capacity_GW"
        label="Maximum GW Capacity"
        helperText={maximum_capacity_GW.error}
        disabled={select}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={() => {}}
        sx={{ mt: 3, mb: 3 }}
        disabled={select}
      >
        Save Changes
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mb: 2 }}
        disabled={select}
        onClick={deletePlant}
      >
        Delete Plant
      </Button>
    </Box>
  );
};

export default EditForm;
