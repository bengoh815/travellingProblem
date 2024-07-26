import { Request, Response } from "express";
import { Status } from "../utils/statusCodes";
import membershipService from "../services/membership.service";
import { handleError } from "../utils/errorHandler";
import { UserRoles } from "../models/user.model";

export class MembershipController {
  getAllMemberships = async (req: Request, res: Response) => {
    try {
      const memberships = await membershipService.getAllMemberships();
      res.status(Status.OK).json(memberships);
    } catch (error: unknown) {
      handleError(res, "Error fetching memberships", error);
    }
  };

  createMembership = async (req: Request, res: Response) => {
    try {
      const { userId, groupId, role, driverCapacity } = req.body;
      const membershipData = {
        userId,
        groupId,
        role: UserRoles[role as keyof typeof UserRoles],
        driverCapacity: driverCapacity || 0,
      };
      const newMembership = await membershipService.createMembership(
        membershipData
      );
      // const newMembership = await membershipService.createMembership(req.body);
      res.status(Status.Created).json(newMembership);
    } catch (error: unknown) {
      handleError(res, "Error creating membership", error);
    }
  };

  getMembershipById = async (req: Request, res: Response) => {
    try {
      const membership = await membershipService.getMembershipById(
        req.params.id
      );
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

  updateMembership = async (req: Request, res: Response) => {
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

  deleteMembership = async (req: Request, res: Response) => {
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
}

export default new MembershipController();
