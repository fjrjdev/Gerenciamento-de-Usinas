import Typography from "@mui/material/Typography";
import SelectInput from "../SelectInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const ModalHeader = ({ setModal }: any) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography component="h1" variant="h5">
          Edit Plant
        </Typography>
        <Button type="button" onClick={() => setModal(false)}>
          <CloseIcon />
        </Button>
      </Box>
      <Box sx={{ mb: 2, mt: 2 }}>
        <SelectInput />
      </Box>
    </>
  );
};

export default ModalHeader;
