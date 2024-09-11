import mongoose from "mongoose";
import ApplicationModel, {
  ApplicationDecision,
} from "../../models/application.model";
import { GroupRoles } from "../../models/group.model";

describe("Application Model Tests", () => {
  it("should create an application successfully with valid data", async () => {
    const applicationData = {
      userId: new mongoose.Types.ObjectId(), // Mock user ID
      groupId: new mongoose.Types.ObjectId(), // Mock group ID
      role: GroupRoles.Member, // Valid role
      decision: ApplicationDecision.Pending, // Valid decision
    };

    const application = new ApplicationModel(applicationData);
    const savedApplication = await application.save();

    expect(savedApplication._id).toBeDefined();
    expect(savedApplication.userId).toBeDefined();
    expect(savedApplication.groupId).toBeDefined();
    expect(savedApplication.role).toBe(applicationData.role);
    expect(savedApplication.decision).toBe(applicationData.decision);
    expect(savedApplication.decidedBy).toBeNull(); // Check if `decidedBy` defaults to null
  });

  it("should default 'decision' to 'pending' if not provided", async () => {
    const applicationData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Member,
    };

    const application = new ApplicationModel(applicationData);
    const savedApplication = await application.save();

    expect(savedApplication._id).toBeDefined();
    expect(savedApplication.decision).toBe(ApplicationDecision.Pending); // Default value check
  });

  it("should fail to create an application without userId", async () => {
    const applicationData = {
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Member,
      decision: ApplicationDecision.Pending,
    };

    let err: any;
    try {
      const application = new ApplicationModel(applicationData);
      await application.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.userId).toBeDefined();
  });

  it("should fail to create an application with an invalid role", async () => {
    const applicationData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      role: "invalid-role", // Invalid role
      decision: ApplicationDecision.Pending,
    };

    let err: any;
    try {
      const application = new ApplicationModel(applicationData);
      await application.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.role).toBeDefined();
  });

  it("should fail to create an application with an invalid decision", async () => {
    const applicationData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Member,
      decision: "invalid-decision", // Invalid decision
    };

    let err: any;
    try {
      const application = new ApplicationModel(applicationData);
      await application.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.decision).toBeDefined();
  });

  it("should allow creating an application without decidedBy", async () => {
    const applicationData = {
      userId: new mongoose.Types.ObjectId(),
      groupId: new mongoose.Types.ObjectId(),
      role: GroupRoles.Moderator,
      decision: ApplicationDecision.Pending,
    };

    const application = new ApplicationModel(applicationData);
    const savedApplication = await application.save();

    expect(savedApplication.decidedBy).toBeNull(); // decidedBy should default to null
  });
});
