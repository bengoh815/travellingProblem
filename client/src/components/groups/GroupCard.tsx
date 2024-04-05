// Standard library
import { Link } from "react-router-dom";

// MUI
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// Models
import { IGroup } from "../../models/group.types";

interface GroupCardProps {
  data: IGroup;
}

const GroupCard: React.FC<GroupCardProps> = ({ data }) => {
  return (
    <>
      <Card sx={{ m: 2, maxWidth: 345 }}>
        <CardActionArea>
          <Link
            to={`/groups/${data._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardContent sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.members.length} members
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small" sx={{ px: 2 }}>
            Join Group
          </Button>
          <Button variant="contained" size="small" sx={{ px: 2 }}>
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GroupCard;
