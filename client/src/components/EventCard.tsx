import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { IEvent } from "../models/event.types";

const EventCard = () => {
  const eventData: IEvent = {
    name: "Sample Event",
    description: "This is a fake event for demonstration purposes.",
    date: new Date("2023-10-05T14:00:00Z"),
    groupId: "fakeGroupId",
    attendees: ["attendee1", "attendee2"],
  };
  return (
    <Box sx={{ p: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography>{eventData.name}</Typography>
          <Typography>{eventData.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Join</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default EventCard;
