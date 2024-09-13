import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";
import { Request, Response } from "express";
import { SECRET_KEY, EMAIL_SECRET_KEY } from "../config";
import { handleError } from "../utils/errorHandler";
import { Status } from "../utils/statusCodes";
import {
  sendVerificationEmail,
  // sendResetPasswordEmail,
} from "../utils/emailService";

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password,
    });
    await user.save();

    // Send Verification Email
    const emailToken = jwt.sign(
      { id: user._id, email: user.email },
      EMAIL_SECRET_KEY,
      { expiresIn: "24h" } // Expire in 24 hours
    );

    const verificationLink = `${req.protocol}://${req.get(
      "host"
    )}/verify-email/${emailToken}`;
    sendVerificationEmail(user.email, verificationLink);

    res.status(Status.Created).send("User registered");
  } catch (error) {
    handleError(res, "Error registering user", error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(Status.BadRequest).send("Invalid email or password");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(Status.BadRequest).send("Invalid email or password");

    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    handleError(res, "Error logging in user", error);
  }
};

// Other authentication related methods like resetPassword, verifyEmail, etc.
