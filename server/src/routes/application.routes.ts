import express from "express";
import ApplicationController from "../controllers/application.controller";
import { APIVersion } from "../utils/apiVersion";
import { validateCreateApplication } from "../middleware/validation/applicationValidate";

const applicationsRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
applicationsRouter.get(
  `${v1}/applications`,
  ApplicationController.getAllApplications
);
applicationsRouter.post(
  `${v1}/applications`,
  validateCreateApplication,
  ApplicationController.createApplication
);
applicationsRouter.get(
  `${v1}/applications/:id`,
  ApplicationController.getApplicationById
);
applicationsRouter.put(
  `${v1}/applications/:id`,
  ApplicationController.updateApplication
);

export default applicationsRouter;
