import UserModel, { UserRoles } from "../../models/user.model";

jest.mock("bcrypt", () => require("bcryptjs"));

describe("User Model Tests", () => {
  it("should create and save a user successfully", async () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "supersecretpassword",
      role: UserRoles.User,
    };

    const user = new UserModel(userData);
    const savedUser = await user.save();

    // Validate fields
    expect(savedUser._id).toBeDefined();
    expect(savedUser.firstName).toBe("John");
    expect(savedUser.lastName).toBe("Doe");
    expect(savedUser.email).toBe("john.doe@example.com");
    expect(savedUser.password).not.toBe("supersecretpassword"); // Password should be hashed
  });

  it("should not save a user without required fields", async () => {
    const userData = {
      firstName: "Jane",
      // lastName and email are missing
    };

    const user = new UserModel(userData);

    let err;
    try {
      await user.save();
    } catch (error) {
      err = error as Error;
    }
    expect(err).toBeDefined();
    expect((err as Error).message).toContain("email"); // Check that it fails on missing email
  });

  it('should validate user role and default to "user"', async () => {
    const userData = {
      firstName: "Sam",
      lastName: "Smith",
      email: "sam.smith@example.com",
      password: "test1234",
    };
    const user = new UserModel(userData);
    const savedUser = await user.save();

    expect(savedUser.role).toBe(UserRoles.User); // Default role
  });

  it("should correctly hash the password before saving", async () => {
    const userData = {
      firstName: "Alice",
      lastName: "Wonderland",
      email: "alice.wonderland@example.com",
      password: "plaintextpassword",
    };
    const user = new UserModel(userData);
    const savedUser = await user.save();

    const isPasswordCorrect = await savedUser.verifyPassword(
      "plaintextpassword"
    );
    expect(isPasswordCorrect).toBe(true); // Password should be hashed and verified
  });
});
