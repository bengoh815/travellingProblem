import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { IGroup } from "../../models/group.types";
import { Add } from "@mui/icons-material";

// TODO implement assigner caretaker for group

const GroupCreate = () => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Group Form
  const [group, setGroup] = useState<IGroup>({
    name: "",
    description: "",
    members: [],
    events: [],
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClose();
    // Handle form submission, such as sending data to a server
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} endIcon={<Add />}>
        Create new group
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 5,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
              Group Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Group Name"
                    name="name"
                    value={group.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={group.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  Assign owner
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default GroupCreate;
