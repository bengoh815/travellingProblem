import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import GroupModel, { IGroup } from "../models/group.model";
import { handleError } from "../utils/errorHandle";

export const getAllGroups = async (req: Request, res: Response) => {
  try {
    const groups = await GroupModel.find();
    res.status(Status.OK).json(groups);
  } catch (error: unknown) {
    handleError(res, "Error fetching groups", error);
  }
};

export const createGroup = async (req: Request, res: Response) => {
  try {
    const newGroup = new GroupModel(req.body as IGroup);
    await newGroup.save();
    res.status(Status.Created).json(newGroup);
  } catch (error: unknown) {
    handleError(res, "Error creating group", error);
  }
};

export const getGroupById = async (req: Request, res: Response) => {
  try {
    const group = await GroupModel.findById(req.params.id);
    if (!group) {
      return res.status(Status.NotFound).json({ message: "Group not found" });
    }
    res.status(Status.OK).json(group);
  } catch (error: unknown) {
    handleError(res, "Error getting group", error);
  }
};

export const updateGroup = async (req: Request, res: Response) => {
  try {
    const updatedGroup = await GroupModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
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
    const deletedGroup = await GroupModel.findByIdAndDelete(req.params.id);
    if (!deletedGroup) {
      return res.status(Status.NotFound).json({ message: "Group not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting group", error);
  }
};
