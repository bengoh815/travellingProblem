import { Response } from "express";
import { Status } from "./statusCodes";

export const handleError = (res: Response, message: string, error: unknown) => {
  if (error instanceof Error) {
    res.status(Status.BadRequest).json({ message, error: error.message });
  } else {
    res
      .status(Status.BadRequest)
      .json({ message: "An unknown error occurred" });
  }
};
