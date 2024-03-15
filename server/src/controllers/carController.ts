import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";

export const getCars = async (req: Request, res: Response) => {
  res.status(Status.OK).send("Hey cars!");
};

export const postCars = async (req: Request, res: Response) => {
  // Assuming car creation logic is successful
  res.status(Status.Created).send("Car created successfully!");
};

export const getCarById = async (req: Request, res: Response) => {
  // Assuming car is found
  res.status(Status.OK).send("Car details");
};

export const updateCar = async (req: Request, res: Response) => {
  // Assuming car update is successful
  res.status(Status.OK).send("Car updated successfully!");
};

export const deleteCar = async (req: Request, res: Response) => {
  // Assuming car deletion is successful
  res.status(Status.NoContent).send();
};
