/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument } from "./user.model";

/**
 * Interface for Group
 */
export interface IGroup {
  name: string;
  description: string;
  organizerIds: IUserDocument["_id"][];
}

export interface IGroupDocument extends IGroup, Document {}

/**
 * Schema for Group
 */
const groupSchema: Schema<IGroupDocument> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    organizerIds: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
      validate: {
        validator: function (val: IUserDocument["_id"][]) {
          return val.length <= 20;
        },
        message: "A group can have a maximum of 20 organizers.",
      },
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster search
groupSchema.index({ name: 1 });

/**
 * Create and export Group model
 */
const GroupModel = mongoose.model<IGroupDocument>("Group", groupSchema);

export default GroupModel;
