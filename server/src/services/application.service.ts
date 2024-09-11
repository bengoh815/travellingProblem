import mongoose from "mongoose";
import ApplicationModel, {
  ApplicationDecision,
  IApplication,
} from "../models/application.model";
import { GroupRoles } from "../models/group.model";

class ApplicationService {
  // Create operations
  async createApplication(data: IApplication): Promise<IApplication> {
    // Validation
    // TODO Check membership if role exist
    const applicationData = data;

    const newApplication = new ApplicationModel(applicationData);
    await newApplication.save();
    return newApplication;
  }

  // Read operations
  async getAllApplications(): Promise<IApplication[]> {
    return await ApplicationModel.find();
  }

  async getApplicationById(
    applicationId: string
  ): Promise<IApplication | null> {
    return await ApplicationModel.findById(applicationId);
  }

  async getApplications(criteria: any, options: any): Promise<IApplication[]> {
    // Validate criteria
    const validCriteria: any = {};
    if (criteria.userId && mongoose.Types.ObjectId.isValid(criteria.userId)) {
      validCriteria.userId = criteria.userId;
    }
    if (criteria.groupId && mongoose.Types.ObjectId.isValid(criteria.groupId)) {
      validCriteria.groupId = criteria.groupId;
    }
    if (criteria.role && Object.values(GroupRoles).includes(criteria.role)) {
      validCriteria.role = criteria.role;
    }
    if (
      criteria.decision &&
      Object.values(ApplicationDecision).includes(criteria.decision)
    ) {
      validCriteria.decision = criteria.decision;
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
    return await ApplicationModel.find(criteria, null, options);
  }

  // Update operations
  async updateApplication(
    applicationId: string,
    updateData: Partial<IApplication>
  ): Promise<IApplication | null> {
    return await ApplicationModel.findByIdAndUpdate(applicationId, updateData, {
      new: true,
    });
  }
}

export default new ApplicationService();
