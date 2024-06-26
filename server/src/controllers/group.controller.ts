import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import groupService from "../services/group.service";
import { handleError } from "../utils/errorHandler";

export const getAllGroups = async (req: Request, res: Response) => {
  try {
    const groups = await groupService.getAllGroups();
    res.status(Status.OK).json(groups);
  } catch (error: unknown) {
    handleError(res, "Error fetching groups", error);
  }
};

export const createGroup = async (req: Request, res: Response) => {
  try {
    const newGroup = await groupService.createGroup(req.body);
    res.status(Status.Created).json(newGroup);
  } catch (error: unknown) {
    handleError(res, "Error creating group", error);
  }
};

export const getGroupById = async (req: Request, res: Response) => {
  try {
    const group = await groupService.getGroupById(req.params.groupId);
    if (!group) {
      return res.status(Status.NotFound).json({ message: "Group not found" });
    }
    res.status(Status.OK).json(group);
  } catch (error: unknown) {
    handleError(res, "Error getting group", error);
  }
};

export const getGroupUsers = async (req: Request, res: Response) => {
  try {
    const users = await groupService.getGroupUsers(req.params.groupId);
    if (!users) {
      return res
        .status(Status.NotFound)
        .json({ message: "Group users not found" });
    }
    res.status(Status.OK).json(users);
  } catch (error: unknown) {
    handleError(res, "Error getting group users", error);
  }
};
export const getGroupEvents = async (req: Request, res: Response) => {
  try {
    const events = await groupService.getGroupEvents(req.params.groupId);
    if (!events) {
      return res
        .status(Status.NotFound)
        .json({ message: "Group events not found" });
    }
    res.status(Status.OK).json(events);
  } catch (error: unknown) {
    handleError(res, "Error getting group events", error);
  }
};

export const updateGroup = async (req: Request, res: Response) => {
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

export const deleteGroup = async (req: Request, res: Response) => {
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
