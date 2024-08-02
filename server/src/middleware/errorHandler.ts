import { Request, Response, NextFunction } from "express";
import { Status } from "../utils/statusCodes";

export const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack); // Log the error stack trace for debugging

  res.status(err.status || Status.InternalServerError).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};
