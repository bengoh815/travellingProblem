import { IUser } from "./user.types";

export interface IRideAssignment {
  driver: string;
  passengers: IUser[];
}

export interface IRide {
  eventId: string;
  assignments: IRideAssignment[];
}
