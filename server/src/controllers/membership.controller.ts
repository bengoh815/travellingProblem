import { Request, Response } from "express";
import membershipService from "../services/membership.service";
import { Status } from "../utils/statusCodes";
import { handleError } from "../utils/errorHandler";
import { optionsConstructor } from "../utils/optionsConstructor";
import { GroupRoles } from "../models/group.model";

export class MembershipController {
  // Create operations
  createMembership = async (req: Request, res: Response) => {
    try {
      const { userId, groupId } = req.body;
      const membershipData = {
        userId,
        groupId,
        role: [GroupRoles.Member],
        driverCapacity: 0,
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

  // Read operations
  getAllMemberships = async (req: Request, res: Response) => {
    try {
      const memberships = await membershipService.getAllMemberships();
      res.status(Status.OK).json(memberships);
    } catch (error: unknown) {
      handleError(res, "Error getting all memberships", error);
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
      handleError(res, "Error getting membership by Id", error);
    }
  };

  getMembership = async (req: Request, res: Response) => {
    try {
      // Validation
      const { id, userId, groupId, role, limit, offset, sortBy, sortOrder } =
        req.query;

      const criteria: any = {};
      if (id) criteria._id = id;
      if (userId) criteria.userId = userId;
      if (groupId) criteria.groupId = groupId;
      if (role) criteria.decision = role;

      const options: any = optionsConstructor(
        limit as string,
        offset as string,
        sortBy as string,
        sortOrder as string
      );

      // Query
      const memberships = await membershipService.getMemberships(
        criteria,
        options
      );

      // Response
      res.status(Status.OK).json(memberships);
    } catch (error: unknown) {
      handleError(res, "Error getting membership by criteria", error);
    }
  };

  // Update operations
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

  // Delete operations
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
