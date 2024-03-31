import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { IEvent } from "../models/event.types";
import { Delete, Edit } from "@mui/icons-material";

interface EventCardProps {
  eventData: IEvent;
}

const EventCardOptions = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="contained" endIcon={<Edit />}>
        Edit
      </Button>
      <Button variant="contained" color="error" endIcon={<Delete />}>
        Delete
      </Button>
    </Box>
  );
};

const EventCard: React.FC<EventCardProps> = ({ eventData }) => {
  const isAdmin = true;

  return (
    <Box sx={{ p: 2 }}>
      <Card variant="outlined">
        <CardHeader
          action={isAdmin && <EventCardOptions />}
          title={eventData.name}
          subheader={eventData.date.toDateString()}
          sx={{ paddingBottom: 1 }}
        />
        <CardContent sx={{ py: 0 }}>
          <Typography variant="body1">{eventData.description}</Typography>
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
