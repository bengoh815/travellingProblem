import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";

export const getRides = async (req: Request, res: Response) => {
  res.status(Status.OK).send("Hey rides!");
};

export const postRides = async (req: Request, res: Response) => {
  // Assuming ride creation logic is successful
  res.status(Status.Created).send("Ride created successfully!");
};

export const getRideById = async (req: Request, res: Response) => {
  // Assuming ride is found
  res.status(Status.OK).send("Ride details");
};

export const updateRide = async (req: Request, res: Response) => {
  // Assuming ride update is successful
  res.status(Status.OK).send("Ride updated successfully!");
};

export const deleteRide = async (req: Request, res: Response) => {
  // Assuming ride deletion is successful
  res.status(Status.NoContent).send();
};
