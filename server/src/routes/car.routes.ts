import express from "express";
import {
  getAllCars,
  createCar,
  getCarById,
  updateCar,
  deleteCar,
} from "../controllers/car.controller";
import { APIVersion } from "../utils/apiVersion";

const carsRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
carsRouter.get(`${v1}/cars`, getAllCars);
carsRouter.post(`${v1}/cars`, createCar);
carsRouter.get(`${v1}/cars/:id`, getCarById);
carsRouter.put(`${v1}/cars/:id`, updateCar);
carsRouter.delete(`${v1}/cars/:id`, deleteCar);

export default carsRouter;
