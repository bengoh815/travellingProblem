/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user.model";
import { IGroup } from "./group.model";

export interface IMembership extends Document {
  userId: IUser["_id"];
  groupId: IGroup["_id"];
  dateCreated: Date;
}

const membershipSchema = new Schema<IMembership>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  dateCreated: { type: Date, default: Date.now },
});

const MembershipModel = mongoose.model<IMembership>(
  "Membership",
  membershipSchema
);

export default MembershipModel;
