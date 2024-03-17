import { UserRoles } from "./user.types";

export enum ApplicationDecision {
  Pending = 0,
  Approved = 1,
  Denied = 2,
}

export interface IApplication {
  user: string;
  appType: UserRoles;
  decision: ApplicationDecision;
}
