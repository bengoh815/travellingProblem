import express from "express";
import GroupController from "../controllers/group.controller";
import { APIVersion } from "../utils/apiVersion";

const groupsRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
groupsRouter.get(`${v1}/groups`, GroupController.getAllGroups);
groupsRouter.post(`${v1}/groups`, GroupController.createGroup);
groupsRouter.get(`${v1}/groups/:groupId`, GroupController.getGroupById);
groupsRouter.get(
  `${v1}/groups/:groupId/events`,
  GroupController.getGroupEvents
);
groupsRouter.put(`${v1}/groups/:groupId`, GroupController.updateGroup);
groupsRouter.delete(`${v1}/groups/:groupId`, GroupController.deleteGroup);
groupsRouter.get(`${v1}/groups/:groupId/users`, GroupController.getGroupUsers);
groupsRouter.post(
  `${v1}/groups/:groupId/users`,
  GroupController.addUserToGroup
);
groupsRouter.delete(
  `${v1}/groups/:groupId/users`,
  GroupController.delUserFromGroup
);

export default groupsRouter;
