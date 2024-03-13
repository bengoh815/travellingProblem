import { User } from "./User";

export type Group = {
  id: number;
  name: string;
  description: string;
  members: User[];
  events: Event[];
};
