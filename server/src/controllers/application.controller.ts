import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import applicationService from "../services/application.service";
import { handleError } from "../utils/errorHandler";
import { ApplicationDecision } from "../models/application.model";

export class ApplicationController {
  // Create operations
  createApplication = async (req: Request, res: Response) => {
    try {
      // Validation
      const { userId, groupId, role } = req.body;
      const applicationData = {
        userId,
        groupId,
        role: role,
        decision: ApplicationDecision.Pending,
      };

      // Query
      const newApplication = await applicationService.createApplication(
        applicationData
      );

      // Response
      res.status(Status.Created).json(newApplication);
    } catch (error: unknown) {
      handleError(res, "Error creating application", error);
    }
  };

  // Read operations
  getAllApplications = async (req: Request, res: Response) => {
    try {
      // Query
      const applications = await applicationService.getAllApplications();

      // Response
      res.status(Status.OK).json(applications);
    } catch (error: unknown) {
      handleError(res, "Error fetching applications", error);
    }
  };

  getApplicationById = async (req: Request, res: Response) => {
    try {
      // Query
      const application = await applicationService.getApplicationById(
        req.params.id
      );
      if (!application) {
        return res
          .status(Status.NotFound)
          .json({ message: "Application not found" });
      }

      // Response
      res.status(Status.OK).json(application);
    } catch (error: unknown) {
      handleError(res, "Error getting application by Id", error);
    }
  };

  getApplications = async (req: Request, res: Response) => {
    try {
      // Validation
      const { id, userId, groupId, status, limit, offset, sortBy, sortOrder } =
        req.query;

      const criteria: any = {};
      if (id) criteria._id = id;
      if (userId) criteria.userId = userId;
      if (groupId) criteria.groupId = groupId;
      if (status) criteria.decision = status;

      const options: any = {};
      if (limit) options.limit = parseInt(limit as string, 10);
      if (offset) options.skip = parseInt(offset as string, 10);
      if (sortBy)
        options.sort = { [sortBy as string]: sortOrder === "desc" ? -1 : 1 };

      // Query
      const applications = await applicationService.getApplications(
        criteria,
        options
      );

      // Response
      res.status(Status.OK).json(applications);
    } catch (error: unknown) {
      handleError(res, "Error getting application by specifications", error);
    }
  };

  // Update operations
  updateApplication = async (req: Request, res: Response) => {
    try {
      // Query
      const updatedApplication = await applicationService.updateApplication(
        req.params.id,
        req.body
      );

      // Response
      if (!updatedApplication) {
        return res
          .status(Status.NotFound)
          .json({ message: "Application not found" });
      } else {
        res.status(Status.OK).json(updatedApplication);
      }
    } catch (error: unknown) {
      handleError(res, "Error updating application", error);
    }
  };
}

export default new ApplicationController();
