import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

// Interface for RideAssignment
export interface IRideAssignment extends Document {
  driver: IUser | mongoose.Types.ObjectId;
  passengers: (IUser | mongoose.Types.ObjectId)[];
}

// Schema for RideAssignment
const rideAssignmentSchema = new Schema<IRideAssignment>({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Interface for Ride
export interface IRide extends Document {
  eventId: mongoose.Types.ObjectId;
  assignments: IRideAssignment[];
}

// Schema for Ride
const rideSchema = new Schema<IRide>({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  assignments: [rideAssignmentSchema],
});

// Create and export the models
export const RideAssignmentModel = mongoose.model<IRideAssignment>(
  "RideAssignment",
  rideAssignmentSchema
);
export const RideModel = mongoose.model<IRide>("Ride", rideSchema);
