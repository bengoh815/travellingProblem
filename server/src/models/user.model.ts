/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import bcrypt from "bcrypt";
import mongoose, { Schema, Document } from "mongoose";
import { SALT_ROUNDS } from "../config";

/**
 * Enumerator for UserRoles
 */
export enum UserRoles {
  User = "user",
  Admin = "admin",
  SuperAdmin = "superadmin",
}

/**
 * Interface for Geolocation
 */
export interface IGeolocation {
  longitude: number;
  latitude: number;
}

/**
 * Interface for User
 */
export interface IUser {
  firstName: string;
  lastName: string;
  address?: string;
  geolocation?: IGeolocation;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRoles;
}

export interface IUserDocument extends IUser, Document {
  verifyPassword(candidatePassword: string): Promise<boolean>;
}

/**
 * Schema for Geolocation
 */
const geolocationSchema = new Schema<IGeolocation>({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});

/**
 * Schema for User
 */
const userSchema: Schema<IUserDocument> = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    geolocation: { type: geolocationSchema, required: false },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: Object.values(UserRoles),
      default: UserRoles.User,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUserDocument>("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    } catch (err) {
      return next(err as Error);
    }
  }
  next();
});

userSchema.methods.verifyPassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Ensure email is unique
userSchema.index({ email: 1 }, { unique: true });

/**
 * Create and export User model
 */
const UserModel = mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;
