import RideModel, { IRide } from "../models/ride.model";

class RideService {
  async getAllRides(): Promise<IRide[]> {
    return await RideModel.find();
  }

  async createRide(rideData: IRide): Promise<IRide> {
    const newRide = new RideModel(rideData);
    await newRide.save();
    return newRide;
  }

  async getRideById(rideId: string): Promise<IRide | null> {
    return await RideModel.findById(rideId);
  }

  async updateRide(
    rideId: string,
    updateData: Partial<IRide>
  ): Promise<IRide | null> {
    return await RideModel.findByIdAndUpdate(rideId, updateData, { new: true });
  }

  async deleteRide(rideId: string): Promise<IRide | null> {
    return await RideModel.findByIdAndDelete(rideId);
  }
}

export default new RideService();
