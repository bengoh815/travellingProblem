import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import { IGroup } from "../models/group.types";
import { IEvent } from "../models/event.types";
import { useEffect, useState } from "react";
import axios from "axios";

const EventInfo = () => {
  // Event information
  const params = useParams();
  const defaultEventData: IEvent = {
    _id: "",
    name: "",
    description: "",
    date: new Date(),
    groupId: "",
    attendees: [],
  };
  const [eventData, setEventData] = useState<IEvent>(defaultEventData);

  // Group information
  const defaultGroupData: IGroup = {
    name: "",
    description: "",
  };
  const [groupData, setGroupData] = useState<IGroup>(defaultGroupData);

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8123/api/v1/events/${params.eventId}`
        );
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event by id: ", error);
      }
    };

    const fetchGroupById = async (groupId: string) => {
      try {
        const response = await axios.get(
          `http://localhost:8123/api/v1/groups/${groupId}`
        );
        setGroupData(response.data);
      } catch (error) {
        console.error("Error fetching group by id: ", error);
      }
    };
    fetchEventById();
    fetchGroupById(eventData.groupId);
  }, [eventData.groupId, params.eventId]);

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
            to={`/groups/${eventData.groupId}`}
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
        <Typography variant="h5">{"temporary date"}</Typography>
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
