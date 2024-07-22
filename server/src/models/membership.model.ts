/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Document, Schema } from "mongoose";
import { IUserDocument, UserRoles } from "./user.model";
import { IGroupDocument } from "./group.model";

/**
 * Interface for Membership
 */
export interface IMembership {
  userId: IUserDocument["_id"];
  groupId: IGroupDocument["_id"];
  role: UserRoles;
  driverCapacity: Number;
}

export interface IMembershipDocument extends IMembership, Document {}

/**
 * Schema for Membership
 */
const membershipSchema = new Schema<IMembershipDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    role: {
      type: Number,
      enum: Object.values(UserRoles),
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Create and export Membership model
 */
const MembershipModel = mongoose.model<IMembershipDocument>(
  "Membership",
  membershipSchema
);

export default MembershipModel;
