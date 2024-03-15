import express from "express";
import {
  getGroups,
  postGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
} from "../controllers/groupController";

const groupsRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
groupsRouter.get(`${v1}/groups`, getGroups);
groupsRouter.post(`${v1}/groups`, postGroups);
groupsRouter.get(`${v1}/groups/:id`, getGroupById);
groupsRouter.put(`${v1}/groups/:id`, updateGroup);
groupsRouter.delete(`${v1}/groups/:id`, deleteGroup);

export default groupsRouter;
