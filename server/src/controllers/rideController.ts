import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import RideModel, { IRide } from "../models/ride.model";
import { handleError } from "../utils/errorHandle";

export const getAllRides = async (req: Request, res: Response) => {
  try {
    const rides = await RideModel.find();
    res.status(Status.OK).json(rides);
  } catch (error: unknown) {
    handleError(res, "Error fetching rides", error);
  }
};

export const createRide = async (req: Request, res: Response) => {
  try {
    const newRide = new RideModel(req.body as IRide);
    await newRide.save();
    res.status(Status.Created).json(newRide);
  } catch (error: unknown) {
    handleError(res, "Error creating ride", error);
  }
};

export const getRideById = async (req: Request, res: Response) => {
  try {
    const ride = await RideModel.findById(req.params.id);
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
    const updatedRide = await RideModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
    const deletedRide = await RideModel.findByIdAndDelete(req.params.id);
    if (!deletedRide) {
      return res.status(Status.NotFound).json({ message: "Ride not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting ride", error);
  }
};
