import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";
import { Status } from "../../utils/statusCodes";

interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(Status.Unauthorized).send("Access Denied");

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(Status.BadRequest).send("Invalid Token");
  }
};
