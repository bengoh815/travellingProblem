import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";

export const getEvents = async (req: Request, res: Response) => {
  res.status(Status.OK).send("Hey events!");
};

export const postEvents = async (req: Request, res: Response) => {
  // Assuming event creation logic is successful
  res.status(Status.Created).send("Event created successfully!");
};

export const getEventById = async (req: Request, res: Response) => {
  // Assuming event is found
  res.status(Status.OK).send("Event details");
};

export const updateEvent = async (req: Request, res: Response) => {
  // Assuming event update is successful
  res.status(Status.OK).send("Event updated successfully!");
};

export const deleteEvent = async (req: Request, res: Response) => {
  // Assuming event deletion is successful
  res.status(Status.NoContent).send();
};
