import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import { IGroup } from "../models/group.types";

const EventInfo = () => {
  const eventData = {
    name: "Tech Talk",
    description: "A discussion on the latest trends in technology.",
    date: new Date("2023-05-20T18:00:00Z"),
    groupId: "group1",
    attendees: ["member1", "member2"],
  };

  const groupData: IGroup = {
    name: "Tech Enthusiasts",
    description:
      "A group for people passionate about technology and innovation.",
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to="/groups/:groupId"
          >
            <Typography>{groupData.name}</Typography>
          </Link>
          <Typography color="text.primary">{eventData.name}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{eventData.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{eventData.date.toDateString()}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{eventData.description}</Typography>
      </Grid>
      <Grid item xs={12}>
        {eventData.attendees.map((e, i) => (
          <Typography key={i}>{e}</Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default EventInfo;
