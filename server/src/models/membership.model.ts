/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Document, Schema } from "mongoose";
import { IUserDocument } from "./user.model";
import { IGroupDocument } from "./group.model";

export interface IMembership {
  userId: IUserDocument["_id"];
  groupId: IGroupDocument["_id"];
  dateCreated: Date;
}

export interface IMembershipDocument extends IMembership, Document {}

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
  },
  {
    timestamps: true,
  }
);

const MembershipModel = mongoose.model<IMembershipDocument>(
  "Membership",
  membershipSchema
);

export default MembershipModel;
