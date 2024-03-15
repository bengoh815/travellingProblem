import { Ride } from "./ride.model";
import { User } from "./user.model";

export type Event = {
  id: number;
  joining: User[];
  food: string;
  rides: Ride;
};
