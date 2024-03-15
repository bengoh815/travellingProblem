import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";

export const getUsers = async (req: Request, res: Response) => {
  res.status(Status.OK).send("Hey users!");
};

export const postUsers = async (req: Request, res: Response) => {
  // Assuming user creation logic is successful
  res.status(Status.Created).send("User created successfully!");
};

export const getUserById = async (req: Request, res: Response) => {
  // Assuming user is found
  res.status(Status.OK).send("User details");
};

export const updateUser = async (req: Request, res: Response) => {
  // Assuming user update is successful
  res.status(Status.OK).send("User updated successfully!");
};

export const deleteUser = async (req: Request, res: Response) => {
  // Assuming user deletion is successful
  res.status(Status.NoContent).send();
};
