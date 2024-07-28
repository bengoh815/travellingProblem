import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import applicationService from "../services/application.service";
import { handleError } from "../utils/errorHandler";
import { UserRoles } from "../models/user.model";
import { ApplicationDecision } from "../models/application.model";

export class ApplicationController {
  getAllApplications = async (req: Request, res: Response) => {
    try {
      const applications = await applicationService.getAllApplications();
      res.status(Status.OK).json(applications);
    } catch (error: unknown) {
      handleError(res, "Error fetching applications", error);
    }
  };

  createApplication = async (req: Request, res: Response) => {
    try {
      const { userId, groupId, role } = req.body;
      const applicationData = {
        userId,
        groupId,
        role: UserRoles[role as keyof typeof UserRoles],
        decision: ApplicationDecision.Pending,
      };
      const newApplication = await applicationService.createApplication(
        applicationData
      );
      res.status(Status.Created).json(newApplication);
    } catch (error: unknown) {
      handleError(res, "Error creating application", error);
    }
  };

  getApplicationById = async (req: Request, res: Response) => {
    try {
      const application = await applicationService.getApplicationById(
        req.params.id
      );
      if (!application) {
        return res
          .status(Status.NotFound)
          .json({ message: "Application not found" });
      }
      res.status(Status.OK).json(application);
    } catch (error: unknown) {
      handleError(res, "Error getting application", error);
    }
  };

  updateApplication = async (req: Request, res: Response) => {
    try {
      const updatedApplication = await applicationService.updateApplication(
        req.params.id,
        req.body
      );
      if (!updatedApplication) {
        return res
          .status(Status.NotFound)
          .json({ message: "Application not found" });
      }
      res.status(Status.OK).json(updatedApplication);
    } catch (error: unknown) {
      handleError(res, "Error updating application", error);
    }
  };
}

export default new ApplicationController();
