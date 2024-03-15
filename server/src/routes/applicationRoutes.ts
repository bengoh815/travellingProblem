import express from "express";
import {
  getApplications,
  postApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController";

const applicationsRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
applicationsRouter.get(`${v1}/applications`, getApplications);
applicationsRouter.post(`${v1}/applications`, postApplications);
applicationsRouter.get(`${v1}/applications/:id`, getApplicationById);
applicationsRouter.put(`${v1}/applications/:id`, updateApplication);
applicationsRouter.delete(`${v1}/applications/:id`, deleteApplication);

export default applicationsRouter;
