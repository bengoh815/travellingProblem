import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import userService from "../services/user.service";
import { handleError } from "../utils/errorHandler";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(Status.OK).json(users);
  } catch (error: unknown) {
    handleError(res, "Error retrieving users", error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(Status.Created).json(newUser);
  } catch (error: unknown) {
    handleError(res, "Error creating user", error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }
    res.status(Status.OK).json(user);
  } catch (error: unknown) {
    handleError(res, "Error getting user", error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }
    res.status(Status.OK).json(updatedUser);
  } catch (error: unknown) {
    handleError(res, "Error updating user", error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }
    res.status(Status.NoContent).json({ message: "User deleted successfully" });
  } catch (error: unknown) {
    handleError(res, "Error deleting user", error);
  }
};
