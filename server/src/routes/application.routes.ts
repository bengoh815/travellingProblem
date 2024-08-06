import express from "express";
import ApplicationController from "../controllers/application.controller";
import { APIVersion } from "../utils/apiVersion";
import { validateCreateApplication } from "../middleware/validation/applicationValidator";

const applicationsRouter = express.Router();

// Routes
applicationsRouter.get(`/`, ApplicationController.getAllApplications);
applicationsRouter.post(
  `/`,
  validateCreateApplication,
  ApplicationController.createApplication
);
applicationsRouter.get(`/:id`, ApplicationController.getApplicationById);
applicationsRouter.put(`/:id`, ApplicationController.updateApplication);

export default applicationsRouter;
