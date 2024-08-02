import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { checkUserExistence } from "../existenceCheck/userCheck";
import { checkGroupExistence } from "../existenceCheck/groupCheck";
import { checkMembershipExistence } from "../existenceCheck/membershipCheck";
import { Status } from "../../utils/statusCodes";

export const validateCreateMembership = [
  body("userId").isMongoId().withMessage("Invalid user ID"),
  body("groupId").isMongoId().withMessage("Invalid group ID"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(Status.BadRequest).json({ errors: errors.array() });
    }
    next();
  },
  checkUserExistence,
  checkGroupExistence,
  checkMembershipExistence,
];
