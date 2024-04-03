/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import mongoose, { Document, Schema } from "mongoose";
import { IUserDocument } from "./user.model";

export interface ICar {
  carModel: string;
  description: string;
  owner: IUserDocument["_id"];
  capacity: number;
}

export interface ICarDocument extends ICar, Document {}

const carSchema = new Schema<ICarDocument>({
  carModel: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  capacity: { type: Number, required: true },
});

const CarModel = mongoose.model<ICarDocument>("Car", carSchema);

export default CarModel;
