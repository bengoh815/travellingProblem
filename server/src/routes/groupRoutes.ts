import express from "express";
import {
  getAllGroups,
  createGroup,
  getGroupById,
  getGroupUsers,
  getGroupEvents,
  updateGroup,
  deleteGroup,
} from "../controllers/groupController";

const groupsRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
groupsRouter.get(`${v1}/groups`, getAllGroups);
groupsRouter.post(`${v1}/groups`, createGroup);
groupsRouter.get(`${v1}/groups/:id`, getGroupById);
groupsRouter.get(`${v1}/groups/:id/users`, getGroupUsers);
groupsRouter.get(`${v1}/groups/:id/events`, getGroupEvents);
groupsRouter.put(`${v1}/groups/:id`, updateGroup);
groupsRouter.delete(`${v1}/groups/:id`, deleteGroup);

export default groupsRouter;
