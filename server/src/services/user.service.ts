import UserModel, { IUser } from "../models/user.model";

class UserService {
  async getAllUsers(): Promise<IUser[]> {
    return await UserModel.find().select("-password");
  }

  async createUser(userData: IUser): Promise<IUser> {
    const newUser = new UserModel(userData);
    await newUser.save();
    return newUser;
  }

  async getUserById(userId: string): Promise<IUser | null> {
    return await UserModel.findById(userId).select("-password").exec();
  }

  async updateUser(
    userId: string,
    updateData: Partial<IUser>
  ): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    })
      .select("-password")
      .exec();
  }

  async deleteUser(userId: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(userId);
  }
}

export default new UserService();
