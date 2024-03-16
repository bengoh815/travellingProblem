import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import User, { IUser } from "../models/user.model";
import { handleError } from "../utils/errorHandle";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.status(Status.OK).json(users);
  } catch (error: unknown) {
    handleError(res, "Error retrieving users", error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body as IUser);
    await newUser.save();
    res.status(Status.Created).json(newUser);
  } catch (error: unknown) {
    handleError(res, "Error creating user", error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
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
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");
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
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }
    res.status(Status.NoContent).json({ message: "User deleted successfully" });
  } catch (error: unknown) {
    handleError(res, "Error deleting user", error);
  }
};
