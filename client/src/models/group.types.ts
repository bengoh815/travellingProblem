import { IEvent } from "./event.types";

export interface IGroup {
  name: string;
  description: string;
  members: string[];
  events: IEvent[];
}
