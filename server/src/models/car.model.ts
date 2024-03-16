import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user.model";

export interface ICar extends Document {
  carModel: string;
  description: string;
  owner: IUser["_id"];
  capacity: number;
}

const carSchema = new Schema<ICar>({
  carModel: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  capacity: { type: Number, required: true },
});

export default mongoose.model<ICar>("Car", carSchema);
