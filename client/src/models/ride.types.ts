import { User } from "./user.types";
import { Car } from "./car.types";

type CarRide = {
  car: Car;
  passengers: User[];
};

export type Ride = {
  id: number;
  drivers: User[];
  carRides: CarRide[];
};
