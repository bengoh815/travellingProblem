import express from "express";
import ApplicationController from "../controllers/application.controller";
import { APIVersion } from "../utils/apiVersion";

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
applicationsRouter.delete(
  `${v1}/applications/:id`,
  ApplicationController.deleteApplication
);

export default applicationsRouter;
