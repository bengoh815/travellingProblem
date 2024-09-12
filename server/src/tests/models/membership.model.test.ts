import mongoose from "mongoose";
import MembershipModel from "../../models/membership.model";
import { GroupRoles } from "../../models/group.model";

describe("Membership Models Test", () => {
  it("should create a membership successfully", async () => {
    const membershipData = {
      userId: new mongoose.Types.ObjectId(), // Mock user ID
      groupId: new mongoose.Types.ObjectId(), // Mock group ID
      role: GroupRoles.Member, // Valid role
      driverCapacity: 4, // Valid driver capacity
    };

    const membership = new MembershipModel(membershipData);
    const savedMembership = await membership.save();

    expect(savedMembership._id).toBeDefined();
    expect(savedMembership.userId).toBeDefined();
    expect(savedMembership.groupId).toBeDefined();
    expect(savedMembership.role).toBe(membershipData.role);
    expect(savedMembership.driverCapacity).toBe(membershipData.driverCapacity);
  });

  it("should fail to create a membership without a userId", async () => {
    const membershipData = {
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Member,
      driverCapacity: 4,
    };

    let err: any;
    try {
      const membership = new MembershipModel(membershipData);
      await membership.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.userId).toBeDefined();
  });

  it("should fail to create a membership without a groupId", async () => {
    const membershipData = {
      userId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Member,
      driverCapacity: 4,
    };

    let err: any;
    try {
      const membership = new MembershipModel(membershipData);
      await membership.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.groupId).toBeDefined();
  });

  it("should fail to create a membership without a role", async () => {
    const membershipData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      driverCapacity: 4,
    };

    let err: any;
    try {
      const membership = new MembershipModel(membershipData);
      await membership.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.role).toBeDefined();
  });

  it("should default driverCapacity to 0 if not provided", async () => {
    const membershipData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Driver, // Valid role
    };

    const membership = new MembershipModel(membershipData);
    const savedMembership = await membership.save();

    expect(savedMembership.driverCapacity).toBe(0); // driverCapacity should default to 0
  });

  it("should fail if driverCapacity is negative", async () => {
    const membershipData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Driver,
      driverCapacity: -1, // Invalid driver capacity
    };

    let err: any;
    try {
      const membership = new MembershipModel(membershipData);
      await membership.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.driverCapacity).toBeDefined();
  });
});
