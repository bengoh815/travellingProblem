import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { IEvent } from "../models/event.types";

interface EventCardProps {
  eventData: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ eventData }) => {
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
