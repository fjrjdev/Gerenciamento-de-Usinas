import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreatePlantForm from '../CreatePlantForm';
import EditPlantForm from '../EditPlantForm';


interface IPlantModal {
    edit?: boolean;
}

const PlantModal: React.FC<IPlantModal> = ({edit = false}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button color="inherit" variant="outlined" onClick={handleOpen}>{edit?"Edit a Plant": "Register New Plant" }</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
            {edit? 
            <EditPlantForm setOpen={setOpen}/>: <CreatePlantForm setOpen={setOpen}/>  }
        </div>
      </Modal>
    </div>
  );
}
export default PlantModal;