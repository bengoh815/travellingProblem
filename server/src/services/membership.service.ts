import MembershipModel, { IMembership } from "../models/membership.model";

class MembershipService {
  async getAllMemberships(): Promise<IMembership[]> {
    return await MembershipModel.find();
  }

  async createMembership(membershipData: IMembership): Promise<IMembership> {
    const newMembership = new MembershipModel(membershipData);
    await newMembership.save();
    return newMembership;
  }

  async getMembershipById(membershipId: string): Promise<IMembership | null> {
    return await MembershipModel.findById(membershipId);
  }

  async updateMembership(
    membershipId: string,
    updateData: Partial<IMembership>
  ): Promise<IMembership | null> {
    return await MembershipModel.findByIdAndUpdate(membershipId, updateData, {
      new: true,
    });
  }

  async deleteMembership(membershipId: string): Promise<IMembership | null> {
    return await MembershipModel.findByIdAndDelete(membershipId);
  }
}

export default new MembershipService();
