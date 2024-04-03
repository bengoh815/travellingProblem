/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import bcrypt from "bcrypt";
import mongoose, { Schema, Document } from "mongoose";
import { IMembershipDocument } from "./membership.model";

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;

export enum UserRoles {
  Driver = "driver",
  Organizer = "organizer",
  Admin = "admin",
}

export interface IUser {
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
  memberships: IMembershipDocument["_id"][];
}

export interface IUserDocument extends IUser, Document {}

const userSchema: Schema = new Schema<IUserDocument>(
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

userSchema.pre<IUserDocument>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  }
  next();
});

userSchema.methods.verifyPassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};
userSchema.index({ email: 1 }, { unique: true });

const UserModel = mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;
