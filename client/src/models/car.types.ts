import { User } from "./user.types";

export type Car = {
  id: number;
  model: string;
  owner: User;
  capacity: number;
};
