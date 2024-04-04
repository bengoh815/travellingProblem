import { IEvent } from "../../models/event.types";
import EventCard from "./EventCard";

interface EventFeedProps {
  eventsData: IEvent[];
}

const EventFeed: React.FC<EventFeedProps> = ({ eventsData }) => {
  return (
    <>
      {eventsData.map((e, i) => (
        <EventCard eventData={e} key={i} />
      ))}
    </>
  );
};

export default EventFeed;
