/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import bcrypt from "bcrypt";
import mongoose, { Schema, Document } from "mongoose";
import { IMembership } from "./membership.model";

export enum UserRoles {
  Driver = "driver",
  Organizer = "organizer",
  Admin = "admin",
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  address?: string;
  geolocation?: {
    longitude: number;
    latitude: number;
  };
  email: string;
  password: string;
  roles: UserRoles[];
  memberships: IMembership["_id"][];
}

const userSchema: Schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String },
    geolocation: {
      longitude: { type: Number },
      latitude: { type: Number },
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, enum: Object.values(UserRoles) }],
    memberships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Membership" }],
  },
  {
    timestamps: true,
  }
);

// TODO Fix saltRounds
const saltRounds = "banana";

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.verifyPassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};
userSchema.index({ email: 1 }, { unique: true });

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
