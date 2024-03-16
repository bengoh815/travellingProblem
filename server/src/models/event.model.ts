import mongoose, { Document, Schema } from "mongoose";
import { IGroup } from "./group.model";
import { IUser } from "./user.model";
import { IRidePlan } from "./ride.model";

export interface IEvent extends Document {
  name: string;
  description: string;
  date: Date;
  groupId: IGroup["_id"];
  attendees: IUser["_id"][];
  ridePlan?: IRidePlan["_id"];
}

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  ridePlan: { type: mongoose.Schema.Types.ObjectId, ref: "RidePlan" },
});

const EventModel = mongoose.model<IEvent>("Event", eventSchema);

export default EventModel;
