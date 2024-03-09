export enum UserRoles {
  Driver = "Driver",
  Organizer = "Organizer",
  Admin = "Admin",
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: UserRoles[];
};
