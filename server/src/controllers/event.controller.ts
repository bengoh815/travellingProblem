import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import eventService from "../services/event.service";
import { handleError } from "../utils/errorHandler";

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEvents();
    res.status(Status.OK).json(events);
  } catch (error: unknown) {
    handleError(res, "Error fetching events", error);
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await eventService.createEvent(req.body);
    res.status(Status.Created).json(newEvent);
  } catch (error: unknown) {
    handleError(res, "Error creating event", error);
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await eventService.getEventById(req.params.id);
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
    const updatedEvent = await eventService.updateEvent(
      req.params.id,
      req.body
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
    const deletedEvent = await eventService.deleteEvent(req.params.id);
    if (!deletedEvent) {
      return res.status(Status.NotFound).json({ message: "Event not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting event", error);
  }
};
