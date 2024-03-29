import express from "express";
import {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";

const eventsRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
eventsRouter.get(`${v1}/events`, getAllEvents);
eventsRouter.post(`${v1}/events`, createEvent);
eventsRouter.get(`${v1}/events/:id`, getEventById);
eventsRouter.put(`${v1}/events/:id`, updateEvent);
eventsRouter.delete(`${v1}/events/:id`, deleteEvent);

export default eventsRouter;
