import { Box, Typography } from "@mui/material";
import { IEvent } from "../../models/event.types";

const EventUpcoming = () => {
  const hasGroup = false;
  const eventData: IEvent[] = [];

  return (
    <>
      <Typography variant="h4">Upcoming Events</Typography>
      {hasGroup ? (
        <Typography>Looks like you are not in a group yet</Typography>
      ) : eventData.length === 0 ? (
        <Typography>No upcoming events</Typography>
      ) : (
        eventData.map((e, i) => <Box key={i}>{e.name}</Box>)
      )}
    </>
  );
};

export default EventUpcoming;
