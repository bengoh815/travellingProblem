import { Ride } from "./ride.types";
import { User } from "./user.types";

export type Event = {
  id: number;
  joining: User[];
  food: string;
  rides: Ride;
};
