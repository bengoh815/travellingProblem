/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument, UserRoles } from "./user.model";

export enum ApplicationDecision {
  Pending = 0,
  Approved = 1,
  Denied = 2,
}

export interface IApplication {
  user: IUserDocument["_id"];
  appType: UserRoles;
  decision: ApplicationDecision;
}

export interface IApplicationDocument extends IApplication, Document {}

const applicationSchema = new Schema<IApplicationDocument>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    appType: { type: String, enum: Object.values(UserRoles), required: true },
    decision: {
      type: Number,
      enum: Object.values(ApplicationDecision),
      required: true,
    },
  },
  { timestamps: true }
);

const ApplicationModel = mongoose.model<IApplicationDocument>(
  "Application",
  applicationSchema
);

export default ApplicationModel;
