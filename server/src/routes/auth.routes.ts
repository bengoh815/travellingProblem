import express from "express";

import { APIVersion } from "../utils/apiVersion";
import { login, register } from "../controllers/auth.controller";
import { validateAuthRegister } from "../middleware/validation/authValidator";

const authRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
authRouter.post(`${v1}/register`, validateAuthRegister, register);
authRouter.post(`${v1}/login`, login);

export default authRouter;
