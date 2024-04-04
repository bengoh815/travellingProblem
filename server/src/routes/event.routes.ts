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

// API version prefix
const v1 = APIVersion.v1;

// Routes
eventsRouter.get(`${v1}/events`, getAllEvents);
eventsRouter.post(`${v1}/events`, createEvent);
eventsRouter.get(`${v1}/events/:id`, getEventById);
eventsRouter.get(`${v1}/events/:id/users`, getEventUsers);
eventsRouter.put(`${v1}/events/:id`, updateEvent);
eventsRouter.delete(`${v1}/events/:id`, deleteEvent);

export default eventsRouter;
