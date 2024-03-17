import { IMembership } from "./membership.types";

export enum UserRoles {
  Driver = "driver",
  Organizer = "organizer",
  Admin = "admin",
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  address?: string;
  geolocation?: {
    longitude: number;
    latitude: number;
  };
  email: string;
  password: string;
  roles: UserRoles[];
  memberships: IMembership[];
}
