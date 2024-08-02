import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { MembershipRoles } from "../../models/membership.model";
import { Status } from "../../utils/statusCodes";

export const validateCreateApplication = [
  body("userId").isMongoId().withMessage("Invalid user ID"),
  body("groupId").isMongoId().withMessage("Invalid group ID"),
  body("role").isIn(Object.values(MembershipRoles)).withMessage("Invalid role"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(Status.BadRequest).json({ errors: errors.array() });
    }
    next();
  },
];
