import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import UserModel, { IUserDocument, UserRoles } from "../../models/user.model";

jest.mock("bcrypt", () => require("bcryptjs"));

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("User Model", () => {
  it("should create and save a user successfully", async () => {
    const validUser: IUserDocument = new UserModel({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "supersecretpassword",
      role: UserRoles.User,
    });

    const savedUser = await validUser.save();

    // Validate fields
    expect(savedUser._id).toBeDefined();
    expect(savedUser.firstName).toBe("John");
    expect(savedUser.lastName).toBe("Doe");
    expect(savedUser.email).toBe("john.doe@example.com");
    expect(savedUser.password).not.toBe("supersecretpassword"); // Password should be hashed
  });

  it("should not save a user without required fields", async () => {
    const invalidUser: IUserDocument = new UserModel({
      firstName: "Jane",
      // lastName and email are missing
    });

    let err;
    try {
      await invalidUser.save();
    } catch (error) {
      err = error as Error;
    }
    expect(err).toBeDefined();
    expect((err as Error).message).toContain("email"); // Check that it fails on missing email
  });

  it('should validate user role and default to "user"', async () => {
    const user: IUserDocument = new UserModel({
      firstName: "Sam",
      lastName: "Smith",
      email: "sam.smith@example.com",
      password: "test1234",
    });

    const savedUser = await user.save();
    expect(savedUser.role).toBe(UserRoles.User); // Default role
  });

  it("should correctly hash the password before saving", async () => {
    const user: IUserDocument = new UserModel({
      firstName: "Alice",
      lastName: "Wonderland",
      email: "alice.wonderland@example.com",
      password: "plaintextpassword",
    });

    const savedUser = await user.save();
    const isPasswordCorrect = await savedUser.verifyPassword(
      "plaintextpassword"
    );
    expect(isPasswordCorrect).toBe(true); // Password should be hashed and verified
  });
});
