// Standard library
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Models
import { IEvent } from "../../models/event.types";

// Component
import EventCard from "./EventCard";

const EventFeed = () => {
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

  return (
    <>
      {eventsData.map((e, i) => (
        <EventCard eventData={e} key={i} />
      ))}
    </>
  );
};

export default EventFeed;
