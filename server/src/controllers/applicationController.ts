import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";

export const getApplications = async (req: Request, res: Response) => {
  res.status(Status.OK).send("Hey applications!");
};

export const postApplications = async (req: Request, res: Response) => {
  // Assuming application creation logic is successful
  res.status(Status.Created).send("Application created successfully!");
};

export const getApplicationById = async (req: Request, res: Response) => {
  // Assuming application is found
  res.status(Status.OK).send("Application details");
};

export const updateApplication = async (req: Request, res: Response) => {
  // Assuming application update is successful
  res.status(Status.OK).send("Application updated successfully!");
};

export const deleteApplication = async (req: Request, res: Response) => {
  // Assuming application deletion is successful
  res.status(Status.NoContent).send();
};
