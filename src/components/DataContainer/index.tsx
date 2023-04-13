import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";
import { useContext } from "react";

const DataContainer = () => {
  const { listPlant } = useContext(PlantsContext);
  const columns: any = [
    { field: "id", headerName: "ID", width: 290 },
    {
      field: "name",
      headerName: "Name",
      width: 180,
    },
    {
      field: "cep",
      headerName: "CEP",
      width: 180,
    },
    {
      field: "latitude",
      headerName: "Latitude",
      width: 180,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      width: 180,
    },
    {
      field: "maximum_capacity_GW",
      headerName: "Maximum GW Capacity",
      width: 180,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 180,
      type: Date,
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      width: 180,
      type: Date,
    },
  ];
  return (
    <Box sx={{ height: "90vh", width: "100%", p: "1.25rem" }}>
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
