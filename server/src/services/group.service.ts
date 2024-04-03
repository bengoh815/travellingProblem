import GroupModel, { IGroup } from "../models/group.model";

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
