import express from "express";
import {
  getAllEvents,
  createEvent,
  getEventById,
  getEventUsers,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller";
import { APIVersion } from "../utils/apiVersion";

const eventsRouter = express.Router();

// Routes
eventsRouter.get(`/`, getAllEvents);
eventsRouter.post(`/`, createEvent);
eventsRouter.get(`/:id`, getEventById);
eventsRouter.get(`/:id/users`, getEventUsers);
eventsRouter.put(`/:id`, updateEvent);
eventsRouter.delete(`/:id`, deleteEvent);

export default eventsRouter;
