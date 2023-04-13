import React from "react";
import { Box, Button, Modal } from "@mui/material";
import CreatePlantForm from "../CreatePlantForm";
import EditPlantForm from "../EditPlantForm";
import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";


const ForwardedCreatePlantForm = React.forwardRef(function ForwardedCreatePlantForm(
  props,
  ref
) {
  return <CreatePlantForm {...props} ref={ref} />;
});

const ForwardedEditPlantForm = React.forwardRef(function ForwardedEditPlantForm(props, ref) {
  return <EditPlantForm {...props} ref={ref} />;
});

const PlantModal = ({ edit = false }) => {
  const { emodal, setEModal, cmodal, setCModal } = React.useContext(PlantsContext);

  const chandleOpen = () => setCModal(true);
  const chandleClose = () => setCModal(false);
  const ehandleOpen = () => setEModal(true);
  const ehandleClose = () => setEModal(false);

  return (
    <Box>
      {edit ? (
        <>
          <Button color="secondary" variant="contained" onClick={ehandleOpen}>
            Modify Plant
          </Button>
          <Modal
            open={emodal}
            onClose={ehandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ForwardedEditPlantForm />
          </Modal>
        </>
      ) : (
        <>
          <Button color="secondary" variant="contained" onClick={chandleOpen}>
            Register a Plant
          </Button>
          <Modal
            open={cmodal}
            onClose={chandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ForwardedCreatePlantForm />
          </Modal>
        </>
      )}
    </Box>
  );
};

export default PlantModal;