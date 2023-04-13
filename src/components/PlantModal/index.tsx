import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreatePlantForm from "../CreatePlantForm";
import EditPlantForm from "../EditPlantForm";
import { Box } from "@mui/material";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";

interface IPlantModal {
  edit?: boolean;
}

const PlantModal: React.FC<IPlantModal> = ({ edit = false }) => {
  const { modal, setModal } = React.useContext(PlantsContext); 
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <Box>
      <Button color="secondary" variant="contained" onClick={handleOpen}>
        {edit ? "Modify Plant" : "Register a Plant"}
      </Button>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
        {edit ? (
          <EditPlantForm setModal={setModal} />
        ) : (
          <CreatePlantForm setModal={setModal} />
        )}
      </>
       
      </Modal>
    </Box>
  );
};
export default PlantModal;
