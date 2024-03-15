import express from "express";
import {
  getRides,
  postRides,
  getRideById,
  updateRide,
  deleteRide,
} from "../controllers/rideController";

const ridesRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
ridesRouter.get(`${v1}/rides`, getRides);
ridesRouter.post(`${v1}/rides`, postRides);
ridesRouter.get(`${v1}/rides/:id`, getRideById);
ridesRouter.put(`${v1}/rides/:id`, updateRide);
ridesRouter.delete(`${v1}/rides/:id`, deleteRide);

export default ridesRouter;
