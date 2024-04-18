/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument } from "./user.model";
import { IEventDocument } from "./event.model";

// Interface for Group
export interface IGroup {
  name: string;
  description: string;
}

export interface IGroupDocument extends IGroup, Document {}

// Schema for Group
const groupSchema = new Schema<IGroupDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const GroupModel = mongoose.model<IGroupDocument>("Group", groupSchema);

export default GroupModel;
