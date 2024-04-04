import express from "express";
import {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "../controllers/application.controller";
import { APIVersion } from "../utils/apiVersion";

const applicationsRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
applicationsRouter.get(`${v1}/applications`, getAllApplications);
applicationsRouter.post(`${v1}/applications`, createApplication);
applicationsRouter.get(`${v1}/applications/:id`, getApplicationById);
applicationsRouter.put(`${v1}/applications/:id`, updateApplication);
applicationsRouter.delete(`${v1}/applications/:id`, deleteApplication);

export default applicationsRouter;
