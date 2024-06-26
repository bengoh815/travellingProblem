export enum UserRoles {
  Driver = "driver",
  Organizer = "organizer",
  Admin = "admin",
}

export interface IUser {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address?: string;
  geolocation?: {
    longitude: number;
    latitude: number;
  };
  email: string;
  password: string;
  roles: UserRoles[];
  isAdmin: boolean;
}
