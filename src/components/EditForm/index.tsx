import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import {
  IPlant,
  PlantsContext,
} from "../../contexts/PlantsContext/PlantsContext";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PartnerContext } from "../../contexts/PartnerContext/PartnerContext";

const EditForm = ({ props }: any) => {
  const { patchPlant, deletePlant, plant } = React.useContext(PlantsContext);
  const { globalLoading } = React.useContext(PartnerContext);
  React.useEffect(() => {
    setFormData(props?.plant);
  }, [props.plant]);
  const [formData, setFormData] = React.useState<IPlant>({});
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formSchema = yup.object().shape({
    name: yup.string().optional().max(200),
    cep: yup.string().optional(),
    latitude: yup.number().optional(),
    longitude: yup.number().optional(),
    maximum_capacity_GW: yup.number().optional().min(0),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const verify = (data:any, data2:any) =>{
    const ult: any = {}
    for (const prop in data){
      if(data.hasOwnProperty(prop) && data2.hasOwnProperty(prop) && data[prop] != data2[prop]){
        ult[prop] = data2[prop]
      }
    }
    return ult
  }
  const onSubmitFunction = (data: IPlant) => {
    patchPlant(verify(plant, data))
 
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        {...register("name")}
        defaultValue={props.plant.name}
        value={formData?.name}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="cep"
        label="CEP"
        {...register("cep")}
        defaultValue={props.plant.cep}
        value={formData?.cep}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="latitude"
        label="latitude"
        {...register("latitude")}
        defaultValue={props.plant.latitude}
        value={formData?.latitude}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="longitude"
        label="longitude"
        {...register("longitude")}
        defaultValue={props.plant.longitude}
        value={formData?.longitude}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="maximum_capacity_GW"
        label="Maximum GW Capacity"
        {...register("maximum_capacity_GW")}
        defaultValue={props.plant.maximum_capacity_GW}
        value={formData?.maximum_capacity_GW}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 3 }}
        disabled={globalLoading}
      >
        Save Changes
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mb: 2 }}
        disabled={globalLoading}
        onClick={deletePlant}
      >
        Delete Plant
      </Button>
    </Box>
  );
};

export default EditForm;
