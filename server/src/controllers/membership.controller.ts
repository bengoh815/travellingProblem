import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import membershipService from "../services/membership.service";
import { handleError } from "../utils/errorHandler";

export const getAllMemberships = async (req: Request, res: Response) => {
  try {
    const memberships = await membershipService.getAllMemberships();
    res.status(Status.OK).json(memberships);
  } catch (error: unknown) {
    handleError(res, "Error fetching memberships", error);
  }
};

export const createMembership = async (req: Request, res: Response) => {
  try {
    const newMembership = await membershipService.createMembership(req.body);
    res.status(Status.Created).json(newMembership);
  } catch (error: unknown) {
    handleError(res, "Error creating membership", error);
  }
};

export const getMembershipById = async (req: Request, res: Response) => {
  try {
    const membership = await membershipService.getMembershipById(req.params.id);
    if (!membership) {
      return res
        .status(Status.NotFound)
        .json({ message: "Membership not found" });
    }
    res.status(Status.OK).json(membership);
  } catch (error: unknown) {
    handleError(res, "Error getting membership", error);
  }
};

export const updateMembership = async (req: Request, res: Response) => {
  try {
    const updatedMembership = await membershipService.updateMembership(
      req.params.id,
      req.body
    );
    if (!updatedMembership) {
      return res
        .status(Status.NotFound)
        .json({ message: "Membership not found" });
    }
    res.status(Status.OK).json(updatedMembership);
  } catch (error: unknown) {
    handleError(res, "Error updating membership", error);
  }
};

export const deleteMembership = async (req: Request, res: Response) => {
  try {
    const deletedMembership = await membershipService.deleteMembership(
      req.params.id
    );
    if (!deletedMembership) {
      return res
        .status(Status.NotFound)
        .json({ message: "Membership not found" });
    }
    res.status(Status.NoContent).send();
  } catch (error: unknown) {
    handleError(res, "Error deleting membership", error);
  }
};
