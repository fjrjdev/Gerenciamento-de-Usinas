import React from "react";
import { Box, Button, Modal } from "@mui/material";
import CreatePlantForm from "../CreatePlantForm";

import { PlantsContext } from "../../contexts/PlantsContext/PlantsContext";
import EditContainer from "../EditContainer";

const ForwardedCreatePlantForm = React.forwardRef(
  function ForwardedCreatePlantForm(props, ref) {
    return <CreatePlantForm {...props} ref={ref} />;
  }
);

const ForwardedEditPlantForm = React.forwardRef(function ForwardedEditPlantForm(
  props,
  ref
) {
  return <EditContainer {...props} ref={ref} />;
});

const PlantModal = ({ edit = false }) => {
  const { emodal, setEModal, cmodal, setCModal } =
    React.useContext(PlantsContext);

  const chandleOpen = () => setCModal(true);
  const chandleClose = () => setCModal(false);
  const ehandleOpen = () => setEModal(true);
  const ehandleClose = () => setEModal(false);

  return (
    <>
      {edit ? (
        <>
          <Button sx={{lineHeight:{xs: 1,sm: 1.05, md: 1.75}}} color="secondary" variant="contained" onClick={ehandleOpen}>
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
          <Button sx={{lineHeight:{xs: 1, sm: 1.75, md: 1.75}}} color="secondary" variant="contained" onClick={chandleOpen}>
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
    </>
  );
};

export default PlantModal;
