import { Request, Response, NextFunction } from "express";
import GroupModel from "../../models/group.model";
import { Status } from "../../utils/statusCodes";

export const checkGroupExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { groupId } = req.body;

  try {
    const groupExists = await GroupModel.exists({ _id: groupId });

    if (!groupExists) {
      return res.status(Status.NotFound).json({ message: "Group not found" });
    }

    next();
  } catch (error) {
    next(error);
  }
};
