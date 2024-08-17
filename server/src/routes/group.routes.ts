import express from "express";
import GroupController from "../controllers/group.controller";

const groupsRouter = express.Router();

// Routes
groupsRouter.get(`/`, GroupController.getAllGroups);
groupsRouter.post(`/`, GroupController.createGroup);
groupsRouter.put(`/:groupId`, GroupController.updateGroup);
groupsRouter.delete(`/:groupId`, GroupController.deleteGroup);
groupsRouter.post(`/:groupId/users`, GroupController.addUserToGroup);
groupsRouter.delete(`/:groupId/users`, GroupController.delUserFromGroup);

export default groupsRouter;
