import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";
import { useContext } from "react";

const DataContainer = () => {
  const {listPlant} = useContext(PlantsContext)
  const columns: any = [
    { field: "id", headerName: "ID", width: 290 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "cep",
      headerName: "CEP",
      width: 90,
    },
    {
      field: "latitude",
      headerName: "Latitude",
      width: 110,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      width: 110,
    },
    {
      field: "maximum_capacity_GW",
      headerName: "Maximum GW Capacity",
      width: 190,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 130,
      type: Date,
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      width: 130,
      type: Date,
    },
  ];
  return (
    <Box sx={{ height: '90vh', width: "100%" }}>
      <DataGrid
        rows={listPlant}
        columns={columns}
        rowsPerPageOptions={[5, 10, 25, 100]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default DataContainer;
