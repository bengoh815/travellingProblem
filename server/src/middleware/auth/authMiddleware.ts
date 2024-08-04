import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";
import { Status } from "../../utils/statusCodes";

interface AuthenticatedRequest extends Request {
  user?: jwt.JwtPayload & { role?: string };
}

const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(Status.Unauthorized)
      .json({ message: "Access Denied: No token provided" });
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY) as jwt.JwtPayload & {
      role?: string;
    };
    req.user = verified;
    next();
  } catch (err) {
    res.status(Status.Unauthorized).json({ message: "Invalid Token" });
  }
};

const authorize = (requiredRole: string) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === requiredRole) {
      next();
    } else {
      res.status(Status.Forbidden).json({
        message: "Forbidden: You do not have access to this resource",
      });
    }
  };
};

export default { authenticateJWT, authorize };
