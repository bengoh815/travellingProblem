import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AppsModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [application, setApplication] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setApplication(event.target.value as string);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            What would you like to apply for?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="application-select-label">Role</InputLabel>
              <Select
                labelId="application-select-label"
                id="application-select"
                value={application}
                label="Driver"
                onChange={handleChange}
              >
                <MenuItem value={"Driver"}>Driver</MenuItem>
                <MenuItem value={"Organizer"}>Organizer</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AppsModal;
