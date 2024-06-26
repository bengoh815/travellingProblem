// Standard library
import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

// MUI
import {
  Box,
  Button,
  Modal,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

// Models
import { IGroupBase } from "../../models/group.types";

const GroupCreate = () => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Group Form
  const defaultForm: IGroupBase = {
    name: "",
    description: "",
  };
  const [group, setGroup] = useState<IGroupBase>(defaultForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!group.name || !group.description) {
      alert("Please fill out all required fields.");
      return;
    }

    // Submit data
    try {
      await axios.post("http://localhost:8123/api/v1/groups", group);
      handleClose();

      setGroup(defaultForm);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} endIcon={<Add />}>
        Create new group
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="group-modal-title"
        aria-describedby="group-modal-description"
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
