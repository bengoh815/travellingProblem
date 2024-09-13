import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { Status } from "../../utils/statusCodes";

export const validateAuthRegister = [
  body("firstName")
    .isString()
    .withMessage("First name must be a string")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long")
    .trim(),
  body("lastName")
    .isString()
    .withMessage("Last name must be a string")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long")
    .trim(),
  body("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[\W_]/)
    .withMessage("Password must contain at least one special character"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(Status.BadRequest).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateAuthLogin = [
  body("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(Status.BadRequest).json({ errors: errors.array() });
    }
    next();
  },
];
