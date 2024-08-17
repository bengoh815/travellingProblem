import express from "express";
import {
  getAllRides,
  createRide,
  getRideById,
  updateRide,
  deleteRide,
} from "../controllers/ride.controller";

const ridesRouter = express.Router();

// Routes
ridesRouter.get(`/`, getAllRides);
ridesRouter.post(`/`, createRide);
ridesRouter.get(`/:id`, getRideById);
ridesRouter.put(`/:id`, updateRide);
ridesRouter.delete(`/:id`, deleteRide);

export default ridesRouter;
