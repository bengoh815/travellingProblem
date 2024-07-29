import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { checkUserExistence } from "../existenceCheck/userCheck";
import { checkGroupExistence } from "../existenceCheck/groupCheck";
import { checkMembershipExistence } from "../existenceCheck/membershipCheck";

export const validateCreateMembership = [
  body("userId").isMongoId().withMessage("Invalid user ID"),
  body("groupId").isMongoId().withMessage("Invalid group ID"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  checkUserExistence,
  checkGroupExistence,
  checkMembershipExistence,
];
