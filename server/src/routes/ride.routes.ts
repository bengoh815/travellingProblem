import express from "express";
import {
  getAllRides,
  createRide,
  getRideById,
  updateRide,
  deleteRide,
} from "../controllers/ride.controller";
import { APIVersion } from "../utils/apiVersion";

const ridesRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
ridesRouter.get(`${v1}/rides`, getAllRides);
ridesRouter.post(`${v1}/rides`, createRide);
ridesRouter.get(`${v1}/rides/:id`, getRideById);
ridesRouter.put(`${v1}/rides/:id`, updateRide);
ridesRouter.delete(`${v1}/rides/:id`, deleteRide);

export default ridesRouter;
