import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IGroup } from "../models/group.types";

interface GroupCardProps {
  data: IGroup;
}

const GroupCard: React.FC<GroupCardProps> = ({ data }) => {
  return (
    <>
      <Card sx={{ m: 2, maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt={`Gathering picture of ${data.name}`}
          />
          <CardContent sx={{ p: 2 }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            <Typography>
              Members:{" "}
              {data.members.map((e) => (
                <Typography>{e}</Typography>
              ))}
            </Typography>
            {data.events.map((e) => (
              <Typography>{e.name}</Typography>
            ))}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Join</Button>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GroupCard;
