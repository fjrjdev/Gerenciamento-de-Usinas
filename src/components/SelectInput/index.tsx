import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const SelectInput = () => {

  const handleChange = (event:any) => {
    console.log(event.target.value);
  };
  const list = [
    "plant1",
    "plant2"
  ];
  return (
    <Box sx={{ minWidth: 120, maxHeight: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="simple">Plant</InputLabel>
        <Select
          labelId="simple"
          id="storeInput"
        //   value={store}
          label="Store"
          onChange={handleChange}
          autoWidth
        >
          {list.map((elem, index) => (
            <MenuItem key={index} value={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectInput