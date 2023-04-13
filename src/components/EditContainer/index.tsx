import Box from "@mui/material/Box";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";
import React from "react";
import ModalHeader from "../ModalHeader";
import EditForm from "../EditForm";

const EditContainer = () => {
  const { plant, setEModal } = React.useContext(PlantsContext);
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ mt: 1, bgcolor: "white", maxWidth: 500, p: 2, borderRadius: 2 }}>
        <ModalHeader setEModal={setEModal} />
        <EditForm props={{ plant }} />
      </Box>
    </Box>
  );
};

export default EditContainer;
