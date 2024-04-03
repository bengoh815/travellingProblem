import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import applicationService from "../services/application.service";
import { handleError } from "../utils/errorHandler";

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await applicationService.getAllApplications();
    res.status(Status.OK).json(applications);
  } catch (error: unknown) {
    handleError(res, "Error fetching applications", error);
  }
};

export const createApplication = async (req: Request, res: Response) => {
  try {
    const newApplication = await applicationService.createApplication(req.body);
    res.status(Status.Created).json(newApplication);
  } catch (error: unknown) {
    handleError(res, "Error creating application", error);
  }
};

export const getApplicationById = async (req: Request, res: Response) => {
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

export const updateApplication = async (req: Request, res: Response) => {
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

export const deleteApplication = async (req: Request, res: Response) => {
  try {
    const deletedApplication = await applicationService.deleteApplication(
      req.params.id
    );
    if (!deletedApplication) {
      return res
        .status(Status.NotFound)
        .json({ message: "Application not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting application", error);
  }
};
