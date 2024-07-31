import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";
import { Request, Response } from "express";
// import {
//   sendVerificationEmail,
//   sendResetPasswordEmail,
// } from "../utils/emailService";

const SECRET_KEY = "THIS-IS-A-TESTRUN-KEY";

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ username, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    // sendVerificationEmail(user, token);

    res.status(201).send("User registered");
  } catch (error) {
    res.status(500).send("Server error");
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
    res.status(500).send("Server error");
  }
};

// Other authentication related methods like resetPassword, verifyEmail, etc.
