import { Car } from "./Car";
import { User } from "./User";

type CarRide = {
  car: Car;
  passengers: User[];
};

export type Ride = {
  id: number;
  drivers: User[];
  carRides: CarRide[];
};
