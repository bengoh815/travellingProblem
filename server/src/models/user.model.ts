export enum UserRoles {
  Driver = "driver",
  Organizer = "organizer",
  Admin = "admin",
}

export type Location = {
  longitude: number;
  latitude: number;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  address?: string;
  geolocation?: Location;
  email: string;
  password: string;
  roles: UserRoles[];
};
