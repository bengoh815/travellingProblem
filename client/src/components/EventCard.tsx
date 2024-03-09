import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const EventCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
