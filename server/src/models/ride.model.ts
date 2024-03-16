import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface IRideAssignment {
  driver: IUser["_id"];
  passengers: IUser["_id"][];
}

export interface IRidePlan extends Document {
  eventId: mongoose.Types.ObjectId;
  assignments: IRideAssignment[];
}

const rideSchema = new Schema<IRidePlan>({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  assignments: [
    {
      driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
  ],
});

const RidePlanModel = mongoose.model<IRidePlan>("RidePlan", rideSchema);

export default RidePlanModel;
