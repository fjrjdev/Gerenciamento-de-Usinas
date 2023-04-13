import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreatePlantForm from "../CreatePlantForm";
import EditPlantForm from "../EditPlantForm";
import { Box } from "@mui/material";

interface IPlantModal {
  edit?: boolean;
}

const PlantModal: React.FC<IPlantModal> = ({ edit = false }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button color="secondary" variant="contained" onClick={handleOpen}>
        {edit ? "Modify Plant" : "Register a Plant"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
        {edit ? (
          <EditPlantForm setOpen={setOpen} />
        ) : (
          <CreatePlantForm setOpen={setOpen} />
        )}
      </>
       
      </Modal>
    </Box>
  );
};
export default PlantModal;
