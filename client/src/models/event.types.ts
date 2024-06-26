import { IRide } from "./ride.types";

export interface IEvent {
  _id?: string;
  name: string;
  description: string;
  date: Date;
  groupId: string;
  attendees: string[];
  ridePlan?: IRide;
}
