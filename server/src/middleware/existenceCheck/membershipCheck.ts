import { Request, Response, NextFunction } from "express";
import MembershipModel from "../../models/membership.model";
import { Status } from "../../utils/statusCodes";

export const checkMembershipExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, groupId } = req.body;

  try {
    const membershipExists = await MembershipModel.exists({ userId, groupId });

    if (membershipExists) {
      return res
        .status(Status.Conflict)
        .json({ message: "Membership already exists" });
    }

    next();
  } catch (error) {
    next(error);
  }
};
