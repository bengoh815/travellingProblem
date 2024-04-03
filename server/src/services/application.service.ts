import ApplicationModel, { IApplication } from "../models/application.model";

class ApplicationService {
  async getAllApplications(): Promise<IApplication[]> {
    return await ApplicationModel.find();
  }

  async createApplication(
    applicationData: IApplication
  ): Promise<IApplication> {
    const newApplication = new ApplicationModel(applicationData);
    await newApplication.save();
    return newApplication;
  }

  async getApplicationById(
    applicationId: string
  ): Promise<IApplication | null> {
    return await ApplicationModel.findById(applicationId);
  }

  async updateApplication(
    applicationId: string,
    updateData: Partial<IApplication>
  ): Promise<IApplication | null> {
    return await ApplicationModel.findByIdAndUpdate(applicationId, updateData, {
      new: true,
    });
  }

  async deleteApplication(applicationId: string): Promise<IApplication | null> {
    return await ApplicationModel.findByIdAndDelete(applicationId);
  }
}

export default new ApplicationService();
