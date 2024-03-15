import { User } from "./user.model";

export type Group = {
  id: number;
  name: string;
  description: string;
  members: User[];
  events: Event[];
};
