import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const DataContainer = () => {
    const columns:any = [
        { field: "id", headerName: "ID", width: 290 },
        {
          field: "name",
          headerName: "Name",
          width: 100,
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
          headerName: "Maximum GW capacity",
          width: 100,
        },
        {
            field: "created_at",
            headerName: "Created At",
            width: 130,
            type: Date
        },
        {
            field: "updated_at",
            headerName: "Updated At",
            width: 130,
            type: Date
        },
        
      ];
    const data: any = [
        {
          id: "e308f74e-2adc-4c51-aae9-382976bb1a12",
          name: "Sol Plant",
          cep: "24445010",
          latitude: 31231231,
          longitude: 323232323,
          maximum_capacity_GW: 1200,
          partner_id: "c9db7767-6d91-4e16-8fea-4169d0e22e45",
          created_at: "2023-04-11T18:58:06.776596Z",
          updated_at: "2023-04-11T18:58:06.776596Z"
        },
        {
          id: "8d47f1b4-989c-4654-a2c9-745c2082ef57",
          name: "Sol Plante",
          cep: "68905615",
          latitude: 31231231,
          longitude: 323232323,
          maximum_capacity_GW: 500,
          partner_id: "c9db7767-6d91-4e16-8fea-4169d0e22e45",
          created_at: "2023-04-11T18:58:52.946269Z",
          updated_at: "2023-04-11T18:59:30.706006Z"
        }
      ]
    return(
    <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5, 10, 25, 100]}
          disableSelectionOnClick
        />
      </Box>
    )
}

export default DataContainer