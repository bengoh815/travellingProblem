import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import User from "../models/user.model";

const handleError = (res: Response, message: string, error: unknown) => {
  if (error instanceof Error) {
    res.status(Status.BadRequest).json({ message, error: error.message });
  } else {
    res
      .status(Status.BadRequest)
      .json({ message: "An unknown error occurred" });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(Status.OK).json(users);
  } catch (error: unknown) {
    handleError(res, "Error retrieving users", error);
  }
};

export const createUsers = async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(Status.Created).json(newUser);
  } catch (error: unknown) {
    handleError(res, "Error creating users", error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }
    res.status(Status.OK).json(user);
  } catch (error: unknown) {
    handleError(res, "Error getting users", error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }
    res.status(Status.OK).json(updatedUser);
  } catch (error: unknown) {
    handleError(res, "Error updating users", error);
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
    handleError(res, "Error deleting users", error);
  }
};
