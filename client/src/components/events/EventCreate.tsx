import { ChangeEvent, FormEvent, useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { IEvent } from "../../models/event.types";

const EventCreate = () => {
  const [event, setEvent] = useState<IEvent>({
    name: "",
    description: "",
    date: new Date(),
    groupId: "",
    attendees: [],
    ridePlan: undefined,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, such as sending data to a server
  };

  return (
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
  );
};

export default EventCreate;
