import { User, UserRoles } from "./User";

export enum ApplicationDecision {
  Pending = 0,
  Approved = 1,
  Denied = 2,
}

export type Applications = {
  id: number;
  user: User;
  appType: UserRoles;
  decision: ApplicationDecision;
};
