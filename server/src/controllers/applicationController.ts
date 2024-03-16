import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import ApplicationModel, { IApplication } from "../models/application.model";
import { handleError } from "../utils/errorHandle";

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await ApplicationModel.find();
    res.status(Status.OK).json(applications);
  } catch (error: unknown) {
    handleError(res, "Error fetching applications", error);
  }
};

export const createApplication = async (req: Request, res: Response) => {
  try {
    const newApplication = new ApplicationModel(req.body as IApplication);
    await newApplication.save();
    res.status(Status.Created).json(newApplication);
  } catch (error: unknown) {
    handleError(res, "Error creating application", error);
  }
};

export const getApplicationById = async (req: Request, res: Response) => {
  try {
    const application = await ApplicationModel.findById(req.params.id);
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
    const updatedApplication = await ApplicationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
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
    const deletedApplication = await ApplicationModel.findByIdAndDelete(
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
