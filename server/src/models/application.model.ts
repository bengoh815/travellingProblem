/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUser, UserRoles } from "./user.model";

export enum ApplicationDecision {
  Pending = 0,
  Approved = 1,
  Denied = 2,
}

export interface IApplication extends Document {
  user: IUser["_id"];
  appType: UserRoles;
  decision: ApplicationDecision;
}

const applicationSchema = new Schema<IApplication>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  appType: { type: String, enum: Object.values(UserRoles), required: true },
  decision: {
    type: Number,
    enum: Object.values(ApplicationDecision),
    required: true,
  },
});

const ApplicationModel = mongoose.model<IApplication>(
  "Application",
  applicationSchema
);

export default ApplicationModel;
