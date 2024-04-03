import express from "express";
import {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "../controllers/application.controller";

const applicationsRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
applicationsRouter.get(`${v1}/applications`, getAllApplications);
applicationsRouter.post(`${v1}/applications`, createApplication);
applicationsRouter.get(`${v1}/applications/:id`, getApplicationById);
applicationsRouter.put(`${v1}/applications/:id`, updateApplication);
applicationsRouter.delete(`${v1}/applications/:id`, deleteApplication);

export default applicationsRouter;
