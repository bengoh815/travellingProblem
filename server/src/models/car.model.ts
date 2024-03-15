import { User } from "./user.model";

export type Car = {
  id: number;
  model: string;
  owner: User;
  capacity: number;
};
