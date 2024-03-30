import { Grid } from "@mui/material";
import EventCreate from "../components/EventCreate";
import Navbar from "../components/Navbar";

const EventInfo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item>
        <EventCreate />
      </Grid>
    </Grid>
  );
};

export default EventInfo;
