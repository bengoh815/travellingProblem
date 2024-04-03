/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument } from "./user.model";

export interface IRideAssignment {
  driver: IUserDocument["_id"];
  passengers: IUserDocument["_id"][];
}

export interface IRide {
  eventId: mongoose.Types.ObjectId;
  assignments: IRideAssignment[];
}

export interface IRideDocument extends IRide, Document {}

const rideSchema = new Schema<IRideDocument>({
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

const RideModel = mongoose.model<IRideDocument>("Ride", rideSchema);

export default RideModel;
