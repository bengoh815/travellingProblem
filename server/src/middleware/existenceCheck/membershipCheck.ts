import { Request, Response, NextFunction } from "express";
import MembershipModel from "../../models/membership.model";

export const checkMembershipExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, groupId } = req.body;

  try {
    const membershipExists = await MembershipModel.exists({ userId, groupId });

    if (membershipExists) {
      return res.status(409).json({ message: "Membership already exists" });
    }

    next();
  } catch (error) {
    next(error);
  }
};
