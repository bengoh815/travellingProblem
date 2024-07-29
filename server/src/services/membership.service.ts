import mongoose from "mongoose";
import MembershipModel, {
  IMembership,
  MembershipRoles,
} from "../models/membership.model";

class MembershipService {
  // Create operations
  async createMembership(membershipData: IMembership): Promise<IMembership> {
    const newMembership = new MembershipModel(membershipData);
    await newMembership.save();
    return newMembership;
  }

  // Read operations
  async getAllMemberships(): Promise<IMembership[]> {
    return await MembershipModel.find();
  }

  async getMembershipById(membershipId: string): Promise<IMembership | null> {
    return await MembershipModel.findById(membershipId);
  }

  async getMemberships(criteria: any, options: any): Promise<IMembership[]> {
    // Validate criteria
    const validCriteria: any = {};

    if (criteria.userId && mongoose.Types.ObjectId.isValid(criteria.userId)) {
      validCriteria.userId = criteria.userId;
    }

    if (criteria.groupId && mongoose.Types.ObjectId.isValid(criteria.groupId)) {
      validCriteria.groupId = criteria.groupId;
    }

    if (criteria.role) {
      const validRoles = Object.values(MembershipRoles);
      if (Array.isArray(criteria.role)) {
        validCriteria.role = {
          $in: criteria.role.filter((role: any) => validRoles.includes(role)),
        };
      } else if (validRoles.includes(criteria.role)) {
        validCriteria.role = criteria.role;
      }
    }

    // Validate options
    const validOptions: any = {};

    if (options.limit && Number.isInteger(options.limit) && options.limit > 0) {
      validOptions.limit = options.limit;
    }

    if (options.skip && Number.isInteger(options.skip) && options.skip >= 0) {
      validOptions.skip = options.skip;
    }

    if (options.sort && typeof options.sort === "object") {
      validOptions.sort = options.sort;
    }

    return await MembershipModel.find(validCriteria, null, validOptions).exec();
  }

  // Update operations
  async updateMembership(
    membershipId: string,
    updateData: Partial<IMembership>
  ): Promise<IMembership | null> {
    return await MembershipModel.findByIdAndUpdate(membershipId, updateData, {
      new: true,
    });
  }

  // Delete operations
  async deleteMembership(membershipId: string): Promise<IMembership | null> {
    return await MembershipModel.findByIdAndDelete(membershipId);
  }
}

export default new MembershipService();
