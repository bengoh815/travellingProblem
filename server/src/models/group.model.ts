/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument } from "./user.model"; // Assuming you have a User model defined
import { IEventDocument } from "./event.model";

// Interface for Group
export interface IGroup {
  name: string;
  description: string;
  members: IUserDocument["_id"][];
  events: IEventDocument["_id"][];
}

export interface IGroupDocument extends IGroup, Document {}

// Schema for Group
const groupSchema = new Schema<IGroupDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

// Create and export the model
const GroupModel = mongoose.model<IGroupDocument>("Group", groupSchema);

export default GroupModel;
