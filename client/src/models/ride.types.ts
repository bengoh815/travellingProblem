import { IUser } from "./user.types";

export interface IRideAssignment {
  driver: string;
  passengers: IUser[];
}

export interface IRide extends Document {
  eventId: string;
  assignments: IRideAssignment[];
}
