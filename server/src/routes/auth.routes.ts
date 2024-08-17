import express from "express";
import { login, register } from "../controllers/auth.controller";
import {
  validateAuthLogin,
  validateAuthRegister,
} from "../middleware/validation/authValidator";

const authRouter = express.Router();

// Routes
authRouter.post(`/register`, validateAuthRegister, register);
authRouter.post(`/login`, validateAuthLogin, login);

export default authRouter;
