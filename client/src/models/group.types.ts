import { IEvent } from "./event.types";

export interface IGroup {
  _id?: string;
  name: string;
  description: string;
  members: string[];
  events: IEvent[];
}
