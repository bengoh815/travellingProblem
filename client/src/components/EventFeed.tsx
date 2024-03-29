import { IEvent } from "../models/event.types";
import EventCard from "./EventCard";

interface EventFeedProps {
  eventsData: IEvent[];
}

const EventFeed: React.FC<EventFeedProps> = ({ eventsData }) => {
  return (
    <>
      {eventsData.map((e) => (
        <EventCard eventData={e} />
      ))}
    </>
  );
};

export default EventFeed;
