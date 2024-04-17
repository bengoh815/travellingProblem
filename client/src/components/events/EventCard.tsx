import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { IEvent } from "../../models/event.types";
import { Delete, Edit } from "@mui/icons-material";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";

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
  const { user } = useUser();

  const eventDate = "eventData.date.toDateString()";

  return (
    <Box sx={{ p: 2 }}>
      <Card variant="outlined">
        <CardActionArea>
          <Link
            to="/events/:eventId"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardHeader
              title={eventData.name}
              subheader={eventDate}
              sx={{ paddingBottom: 1 }}
            />
            <CardContent sx={{ py: 0 }}>
              <Typography variant="body1">{eventData.description}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small">Join</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default EventCard;
