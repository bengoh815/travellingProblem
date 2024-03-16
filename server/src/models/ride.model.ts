/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface IRideAssignment {
  driver: IUser["_id"];
  passengers: IUser["_id"][];
}

export interface IRide extends Document {
  eventId: mongoose.Types.ObjectId;
  assignments: IRideAssignment[];
}

const rideSchema = new Schema<IRide>({
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

const RideModel = mongoose.model<IRide>("Ride", rideSchema);

export default RideModel;
