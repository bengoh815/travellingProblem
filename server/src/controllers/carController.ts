import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import { handleError } from "../utils/errorHandle";
import CarModel, { ICar } from "../models/car.model";

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await CarModel.find();
    res.status(Status.OK).json(cars);
  } catch (error: unknown) {
    handleError(res, "Error fetching cars", error);
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    const newCar = new CarModel(req.body as ICar);
    await newCar.save();
    res.status(Status.Created).json(newCar);
  } catch (error: unknown) {
    handleError(res, "Error creating car", error);
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await CarModel.findById(req.params.id);
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
    const updatedCar = await CarModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCar) {
      return res.status(Status.NotFound).json({ message: "Car not found" });
    }
    res.status(Status.OK).json(updateCar);
  } catch (error: unknown) {
    handleError(res, "Error updating car", error);
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const deletedCar = await CarModel.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(Status.NotFound).json({ message: "Car not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting car", error);
  }
};
