// Standard library
import React, { ChangeEvent, FormEvent, useState } from "react";

// MUI
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
  Modal,
} from "@mui/material";

// Models
import { IEvent } from "../../models/event.types";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventCreate = () => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Event form
  const params = useParams();
  const defaultForm: IEvent = {
    name: "",
    description: "",
    date: new Date(),
    groupId: params.groupId ? params.groupId : "",
    attendees: [],
    ridePlan: undefined,
  };
  const [event, setEvent] = useState<IEvent>(defaultForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!event.name || !event.description || event.groupId === "") {
      alert("Please fill out all required fields.");
      return;
    }

    // Submit data
    try {
      await axios.post("http://localhost:8123/api/v1/events", event);
      handleClose();

      setEvent(defaultForm);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} endIcon={<Add />}>
        Create new event
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-description"
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
              Event Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Event Name"
                    name="name"
                    value={event.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={event.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="datetime-local"
                    label="Date"
                    name="date"
                    value={event.date}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
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

export default EventCreate;
