import mongoose from "mongoose";
import GroupModel from "../../models/group.model";
import { IUserDocument } from "../../models/user.model";

describe("Group Model Tests", () => {
  it("should create a group successfully", async () => {
    const groupData = {
      name: "Tech Enthusiasts",
      description: "A group for tech enthusiasts.",
      organizerIds: [], // No organizers initially
    };

    const group = new GroupModel(groupData);
    const savedGroup = await group.save();

    expect(savedGroup._id).toBeDefined();
    expect(savedGroup.name).toBe(groupData.name);
    expect(savedGroup.description).toBe(groupData.description);
    expect(savedGroup.organizerIds.length).toBe(0); // No organizers initially
  });

  it("should fail to create a group without a name", async () => {
    const groupData = {
      description: "A group without a name",
      organizerIds: [],
    };

    let err: any;
    try {
      const group = new GroupModel(groupData);
      await group.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.name).toBeDefined(); // Mongoose validation error for missing name
  });

  it("should fail to create a group without a description", async () => {
    const groupData = {
      name: "No Description Group",
      organizerIds: [],
    };

    let err: any;
    try {
      const group = new GroupModel(groupData);
      await group.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.description).toBeDefined();
  });

  it("should not allow more than 20 organizers", async () => {
    const fakeUserIds = Array(21).fill(new mongoose.Types.ObjectId()); // 21 fake ObjectIds

    const groupData = {
      name: "Too Many Organizers",
      description: "This group exceeds the organizer limit",
      organizerIds: fakeUserIds,
    };

    let err: any;
    try {
      const group = new GroupModel(groupData);
      await group.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.organizerIds).toBeDefined();
    expect(err.errors.organizerIds.message).toContain(
      "A group can have a maximum of 20 organizers."
    );
  });

  it("should create a group with organizers successfully", async () => {
    const fakeUserIds: IUserDocument["_id"][] = [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
    ];

    const groupData = {
      name: "Group with Organizers",
      description: "A group with valid organizers.",
      organizerIds: fakeUserIds,
    };

    const group = new GroupModel(groupData);
    const savedGroup = await group.save();

    expect(savedGroup._id).toBeDefined();
    expect(savedGroup.organizerIds.length).toBe(2);
  });
});
