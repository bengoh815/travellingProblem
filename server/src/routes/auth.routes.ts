import express from "express";

import { APIVersion } from "../utils/apiVersion";
import { register } from "../controllers/auth.controller";

const applicationsRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
applicationsRouter.post(`${v1}/applications`, register);

export default applicationsRouter;
