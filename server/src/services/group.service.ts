import EventModel, { IEvent } from "../models/event.model";
import GroupModel, { IGroup } from "../models/group.model";
import MembershipModel from "../models/membership.model";
import { IUser } from "../models/user.model";

class GroupService {
  async getAllGroups(): Promise<IGroup[]> {
    return await GroupModel.find();
  }

  async createGroup(groupData: IGroup): Promise<IGroup> {
    const newGroup = new GroupModel(groupData);
    await newGroup.save();
    return newGroup;
  }

  async getGroupById(groupId: string): Promise<IGroup | null> {
    return await GroupModel.findById(groupId);
  }

  async getGroupUsers(groupId: string): Promise<IUser[] | null> {
    const memberships = await MembershipModel.find({ groupId }).populate(
      "userId"
    );
    return memberships.map((membership) => membership.userId as IUser);
  }

  async getGroupEvents(groupId: string): Promise<IEvent[] | null> {
    return await EventModel.find({ groupId });
  }

  async updateGroup(
    groupId: string,
    updateData: Partial<IGroup>
  ): Promise<IGroup | null> {
    return await GroupModel.findByIdAndUpdate(groupId, updateData, {
      new: true,
    });
  }

  async deleteGroup(groupId: string): Promise<IGroup | null> {
    return await GroupModel.findByIdAndDelete(groupId);
  }
}

export default new GroupService();
