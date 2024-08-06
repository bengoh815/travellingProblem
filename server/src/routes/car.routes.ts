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

// Routes
carsRouter.get(`/`, getAllCars);
carsRouter.post(`/`, createCar);
carsRouter.get(`/:id`, getCarById);
carsRouter.put(`/:id`, updateCar);
carsRouter.delete(`/:id`, deleteCar);

export default carsRouter;
