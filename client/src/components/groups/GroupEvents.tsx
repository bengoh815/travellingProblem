// Standard library
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// MUI
import { Grid } from "@mui/material";

// Models
import { IEvent } from "../../models/event.types";

// Component
import EventCard from "../events/EventCard";
import EventCreate from "../events/EventCreate";

/**
 * Manages events for a particular group.
 *
 * @returns The component
 */
const GroupEvents = () => {
  // Get event data
  const params = useParams();
  const [eventsData, setEventsData] = useState<IEvent[]>([]);
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8123/api/v1/groups/${params.groupId}/events`
        );

        setEventsData(response.data);
      } catch (error) {
        console.error("Error fetching group events: ", error);
      }
    };

    fetchEventData();
  }, [params.groupId]);

  // For updates
  const addEvent = (event: IEvent) => {
    setEventsData((prevEventsData) => [...prevEventsData, event]);
  };

  const updateEvent = (updatedEvent: IEvent) => {
    setEventsData((prevEventsData) =>
      prevEventsData.map((obj) =>
        obj._id === updatedEvent._id ? updatedEvent : obj
      )
    );
  };

  const removeEvent = (eventId: string) => {
    setEventsData((prevEventsData) =>
      prevEventsData.filter((obj) => obj._id !== eventId)
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <EventCreate
          addEvent={addEvent}
          updateEvent={updateEvent}
          removeEvent={removeEvent}
        />
      </Grid>
      <Grid item xs={12}>
        {eventsData.map((e, i) => (
          <EventCard eventData={e} key={i} />
        ))}
      </Grid>
    </Grid>
  );
};

export default GroupEvents;
