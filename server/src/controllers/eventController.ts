import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import EventModel, { IEvent } from "../models/event.model";
import { handleError } from "../utils/errorHandler";

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventModel.find();
    res.status(Status.OK).json(events);
  } catch (error: unknown) {
    handleError(res, "Error fetching events", error);
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = new EventModel(req.body as IEvent);
    await newEvent.save();
    res.status(Status.Created).json(newEvent);
  } catch (error: unknown) {
    handleError(res, "Error creating event", error);
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await EventModel.findById(req.params.id);
    if (!event) {
      return res.status(Status.NotFound).json({ message: "Event not found" });
    }
    res.status(Status.OK).json(event);
  } catch (error: unknown) {
    handleError(res, "Error getting event", error);
  }
};

export const getEventUsers = async (req: Request, res: Response) => {
  res.status(200);
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await EventModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(Status.NotFound).json({ message: "Event not found" });
    }
    res.status(Status.OK).json(updatedEvent);
  } catch (error: unknown) {
    handleError(res, "Error updating event", error);
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(Status.NotFound).json({ message: "Event not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting event", error);
  }
};
