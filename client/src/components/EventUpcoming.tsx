import { Typography } from "@mui/material";

const EventUpcoming = () => {
  const hasGroup = false;

  return (
    <>
      <Typography variant="h4">Upcoming Events</Typography>
      <Typography>Looks like you are not in a group yet</Typography>
      <Typography>No upcoming events</Typography>
    </>
  );
};

export default EventUpcoming;
