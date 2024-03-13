import { User } from "./User";

export type Car = {
  id: number;
  model: string;
  owner: User;
  capacity: number;
};
