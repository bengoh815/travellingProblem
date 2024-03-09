import { Event } from "./event.types";
import { User } from "./user.types";

export type Group = {
  id: number;
  name: string;
  description: string;
  members: User[];
  events: Event[];
};
