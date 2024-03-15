import { Car } from "./car.model";
import { User } from "./user.model";

type CarRide = {
  car: Car;
  passengers: User[];
};

export type Ride = {
  id: number;
  drivers: User[];
  carRides: CarRide[];
};
