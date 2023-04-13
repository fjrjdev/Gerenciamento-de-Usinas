import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";

const SelectInput = () => {
  const { listPlant, plant, setPlant } = React.useContext(PlantsContext);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any) => {
    setValue(event.target.value);
    setPlant(listPlant[event.target.value]);
  };

  return (
    <Box sx={{ minWidth: 120, maxHeight: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="simple">Plant</InputLabel>
        <Select
          labelId="simple"
          id="plantInput"
          value={value}
          label="Plants"
          onChange={handleChange}
        >
          {listPlant.map((elem: any, index) => {
            return (
              <MenuItem key={elem.id} value={index}>
                {elem.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
