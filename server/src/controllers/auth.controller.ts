import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";
import { Request, Response } from "express";
import { SECRET_KEY } from "../config";
import { handleError } from "../utils/errorHandler";
// import {
//   sendVerificationEmail,
//   sendResetPasswordEmail,
// } from "../utils/emailService";

export const register = async (req: Request, res: Response) => {
  try {
    console.log("Here");
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();

    console.log(user);

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    // sendVerificationEmail(user, token);

    res.status(201).send("User registered");
  } catch (error) {
    handleError(res, "Error registering user", error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).send("Invalid email or password");

    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    handleError(res, "Error logging in user", error);
  }
};

// Other authentication related methods like resetPassword, verifyEmail, etc.
