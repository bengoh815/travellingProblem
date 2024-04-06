import express from "express";
import {
  getAllGroups,
  createGroup,
  getGroupById,
  getGroupUsers,
  getGroupEvents,
  updateGroup,
  deleteGroup,
} from "../controllers/group.controller";
import { APIVersion } from "../utils/apiVersion";

const groupsRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
groupsRouter.get(`${v1}/groups`, getAllGroups);
groupsRouter.post(`${v1}/groups`, createGroup);
groupsRouter.get(`${v1}/groups/:groupId`, getGroupById);
groupsRouter.get(`${v1}/groups/:groupId/users`, getGroupUsers);
groupsRouter.get(`${v1}/groups/:groupId/events`, getGroupEvents);
groupsRouter.put(`${v1}/groups/:groupId`, updateGroup);
groupsRouter.delete(`${v1}/groups/:groupId`, deleteGroup);

export default groupsRouter;
