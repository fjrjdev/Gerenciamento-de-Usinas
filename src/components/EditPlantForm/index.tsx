import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm, useInput } from "lx-react-form";
import CloseIcon from "@mui/icons-material/Close";
import SelectInput from "../SelectInput";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";
import React from "react";
import ModalHeader from "../ModalHeader";
import EditForm from "../EditForm";
import { PartnerContext } from "../../contexts/PartnerContext/PartnerContext";

interface IEditPlantFrom {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditPlantForm: React.FC<IEditPlantFrom> = ({ setModal }: any) => {
  const { plant } = React.useContext(PlantsContext);  
  const { setGlobalLoading,  } = React.useContext(PartnerContext);
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ mt: 1, bgcolor: "white", maxWidth: 500, p: 2 }}>
        <ModalHeader setModal={setModal} />
        <EditForm props={{ plant }} />
      </Box>
    </Box>
  );
};

export default EditPlantForm;
