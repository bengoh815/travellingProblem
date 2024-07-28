/**
 * REMEMBER TO UPDATE FRONTEND MODELS
 */

import bcrypt from "bcrypt";
import mongoose, { Schema, Document } from "mongoose";

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;

// /**
//  * Enumerator for UserRoles
//  */
// export enum UserRoles {
//   User = "user",
//   Driver = "driver",
//   Organizer = "organizer",
//   Admin = "admin",
// }

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

// Ensure email is unique
userSchema.index({ email: 1 }, { unique: true });

/**
 * Create and export User model
 */
const UserModel = mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;
