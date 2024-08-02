import express from "express";

import { APIVersion } from "../utils/apiVersion";
import { login, register } from "../controllers/auth.controller";
import {
  validateAuthLogin,
  validateAuthRegister,
} from "../middleware/validation/authValidator";

const authRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;
const auth = "auth";

// Routes
authRouter.post(`${v1}/${auth}/register`, validateAuthRegister, register);
authRouter.post(`${v1}/${auth}/login`, validateAuthLogin, login);

export default authRouter;
