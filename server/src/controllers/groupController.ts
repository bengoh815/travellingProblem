import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";

export const getGroups = async (req: Request, res: Response) => {
  res.status(Status.OK).send("Hey groups!");
};

export const postGroups = async (req: Request, res: Response) => {
  // Assuming group creation logic is successful
  res.status(Status.Created).send("Group created successfully!");
};

export const getGroupById = async (req: Request, res: Response) => {
  // Assuming group is found
  res.status(Status.OK).send("Group details");
};

export const updateGroup = async (req: Request, res: Response) => {
  // Assuming group update is successful
  res.status(Status.OK).send("Group updated successfully!");
};

export const deleteGroup = async (req: Request, res: Response) => {
  // Assuming group deletion is successful
  res.status(Status.NoContent).send();
};
