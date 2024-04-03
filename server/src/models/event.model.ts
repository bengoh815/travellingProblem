/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Document, Schema } from "mongoose";
import { IGroupDocument } from "./group.model";
import { IUserDocument } from "./user.model";
import { IRideDocument } from "./ride.model";

export interface IEvent {
  name: string;
  description: string;
  date: Date;
  groupId: IGroupDocument["_id"];
  attendees: IUserDocument["_id"][];
  ridePlan?: IRideDocument["_id"];
}

export interface IEventDocument extends IEvent, Document {}

const eventSchema = new Schema<IEventDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  ridePlan: { type: mongoose.Schema.Types.ObjectId, ref: "Ride" },
});

const EventModel = mongoose.model<IEventDocument>("Event", eventSchema);

export default EventModel;
