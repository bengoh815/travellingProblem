import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import carService from "../services/car.service";
import { handleError } from "../utils/errorHandler";

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await carService.getAllCars();
    res.status(Status.OK).json(cars);
  } catch (error: unknown) {
    handleError(res, "Error fetching cars", error);
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    const newCar = await carService.createCar(req.body);
    res.status(Status.Created).json(newCar);
  } catch (error: unknown) {
    handleError(res, "Error creating car", error);
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await carService.getCarById(req.params.id);
    if (!car) {
      return res.status(Status.NotFound).json({ message: "Car not found" });
    }
    res.status(Status.OK).json(car);
  } catch (error: unknown) {
    handleError(res, "Error getting car", error);
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const updatedCar = await carService.updateCar(req.params.id, req.body);
    if (!updatedCar) {
      return res.status(Status.NotFound).json({ message: "Car not found" });
    }
    res.status(Status.OK).json(updatedCar);
  } catch (error: unknown) {
    handleError(res, "Error updating car", error);
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const deletedCar = await carService.deleteCar(req.params.id);
    if (!deletedCar) {
      return res.status(Status.NotFound).json({ message: "Car not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting car", error);
  }
};
