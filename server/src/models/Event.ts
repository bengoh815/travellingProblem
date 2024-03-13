import { Ride } from "./Ride";
import { User } from "./User";

export type Event = {
  id: number;
  joining: User[];
  food: string;
  rides: Ride;
};
