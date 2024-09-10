/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Document, Schema } from "mongoose";
import { IUserDocument } from "./user.model";
import { GroupRoles, IGroupDocument } from "./group.model";

/**
 * Interface for Membership
 */
export interface IMembership {
  userId: IUserDocument["_id"];
  groupId: IGroupDocument["_id"];
  role: GroupRoles[];
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
      type: [String],
      enum: Object.values(GroupRoles),
      required: true,
    },
    driverCapacity: {
      type: Number,
      default: 0,
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
