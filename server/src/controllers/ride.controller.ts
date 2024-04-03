import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import rideService from "../services/ride.service";
import { handleError } from "../utils/errorHandler";

export const getAllRides = async (req: Request, res: Response) => {
  try {
    const rides = await rideService.getAllRides();
    res.status(Status.OK).json(rides);
  } catch (error: unknown) {
    handleError(res, "Error fetching rides", error);
  }
};

export const createRide = async (req: Request, res: Response) => {
  try {
    const newRide = await rideService.createRide(req.body);
    res.status(Status.Created).json(newRide);
  } catch (error: unknown) {
    handleError(res, "Error creating ride", error);
  }
};

export const getRideById = async (req: Request, res: Response) => {
  try {
    const ride = await rideService.getRideById(req.params.id);
    if (!ride) {
      return res.status(Status.NotFound).json({ message: "Ride not found" });
    }
    res.status(Status.OK).json(ride);
  } catch (error: unknown) {
    handleError(res, "Error getting ride", error);
  }
};

export const updateRide = async (req: Request, res: Response) => {
  try {
    const updatedRide = await rideService.updateRide(req.params.id, req.body);
    if (!updatedRide) {
      return res.status(Status.NotFound).json({ message: "Ride not found" });
    }
    res.status(Status.OK).json(updatedRide);
  } catch (error: unknown) {
    handleError(res, "Error updating ride", error);
  }
};

export const deleteRide = async (req: Request, res: Response) => {
  try {
    const deletedRide = await rideService.deleteRide(req.params.id);
    if (!deletedRide) {
      return res.status(Status.NotFound).json({ message: "Ride not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting ride", error);
  }
};
