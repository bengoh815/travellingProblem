import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/user.model";
import { Status } from "../../utils/statusCodes";

export const checkUserEmailExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  try {
    // Check if the email already exists in the database
    const emailExists = await UserModel.exists({ email: email });

    if (emailExists) {
      // If email exists, send a 409 Conflict response
      return res
        .status(Status.Conflict)
        .json({ message: "Email is already in use" });
    }

    // If email does not exist, proceed to the next middleware
    next();
  } catch (error) {
    // Log the error if necessary and pass it to the next middleware
    console.error("Error checking email existence:", error);
    next(error);
  }
};
