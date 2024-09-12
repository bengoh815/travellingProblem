/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument } from "./user.model";
import { GroupRoles, IGroupDocument } from "./group.model";

export enum ApplicationDecision {
  Pending = "pending",
  Approved = "approved",
  Denied = "denied",
  Withdrawn = "withdrawn",
}

/**
 * Interface for Application
 */
export interface IApplication {
  userId: IUserDocument["_id"];
  groupId: IGroupDocument["_id"];
  role: GroupRoles;
  decision: ApplicationDecision;
  decidedBy?: IUserDocument["_id"];
}

export interface IApplicationDocument extends IApplication, Document {}

/**
 * Schema for Application
 */
const applicationSchema = new Schema<IApplicationDocument>(
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
      type: String,
      enum: Object.values(GroupRoles),
      required: true,
    },
    decision: {
      type: String,
      enum: Object.values(ApplicationDecision),
      required: true,
      default: ApplicationDecision.Pending,
    },
    decidedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

/**
 * Create and export Application Model
 */
const ApplicationModel = mongoose.model<IApplicationDocument>(
  "Application",
  applicationSchema
);

export default ApplicationModel;
