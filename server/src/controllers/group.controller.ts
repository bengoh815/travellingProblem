import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import groupService from "../services/group.service";
import { handleError } from "../utils/errorHandler";

export class GroupController {
  // Create operations
  createGroup = async (req: Request, res: Response) => {
    try {
      const newGroup = await groupService.createGroup(req.body);
      res.status(Status.Created).json(newGroup);
    } catch (error: unknown) {
      handleError(res, "Error creating group", error);
    }
  };

  // Read operations
  getAllGroups = async (req: Request, res: Response) => {
    try {
      const groups = await groupService.getAllGroups();
      res.status(Status.OK).json(groups);
    } catch (error: unknown) {
      handleError(res, "Error fetching groups", error);
    }
  };

  // Update operations
  updateGroup = async (req: Request, res: Response) => {
    try {
      const updatedGroup = await groupService.updateGroup(
        req.params.groupId,
        req.body
      );
      if (!updatedGroup) {
        return res.status(Status.NotFound).json({ message: "Group not found" });
      }
      res.status(Status.OK).json(updatedGroup);
    } catch (error: unknown) {
      handleError(res, "Error updating group", error);
    }
  };

  // Delete operations
  deleteGroup = async (req: Request, res: Response) => {
    try {
      const deletedGroup = await groupService.deleteGroup(req.params.groupId);
      if (!deletedGroup) {
        return res.status(Status.NotFound).json({ message: "Group not found" });
      }
      res.status(Status.NoContent).send();
    } catch (error: unknown) {
      handleError(res, "Error deleting group", error);
    }
  };

  addUserToGroup = async (req: Request, res: Response) => {
    try {
      // Create membership
    } catch (error: unknown) {
      handleError(res, "Error adding user to group", error);
    }
  };

  delUserFromGroup = async (req: Request, res: Response) => {
    try {
      // Delete membership
    } catch (error: unknown) {
      handleError(res, "Error deleting user from group", error);
    }
  };
}

export default new GroupController();
