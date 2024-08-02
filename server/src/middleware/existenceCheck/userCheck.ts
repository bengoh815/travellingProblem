import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/user.model";
import { Status } from "../../utils/statusCodes";

export const checkUserExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;
  try {
    const userExists = await UserModel.exists({ _id: userId });

    if (!userExists) {
      return res.status(Status.NotFound).json({ message: "User not found" });
    }

    next();
  } catch (error) {
    next(error);
  }
};
