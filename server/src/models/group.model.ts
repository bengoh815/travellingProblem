import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model"; // Assuming you have a User model defined
import { IEvent } from "./event.model";

// Interface for Group
export interface IGroup extends Document {
  name: string;
  description: string;
  members: IUser["_id"][];
  events: IEvent["_id"][];
}

// Schema for Group
const groupSchema = new Schema<IGroup>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

// Create and export the model
const GroupModel = mongoose.model<IGroup>("Group", groupSchema);

export default GroupModel;
