import CarModel, { ICar } from "../models/car.model";

class CarService {
  async getAllCars(): Promise<ICar[]> {
    return await CarModel.find();
  }

  async createCar(carData: ICar): Promise<ICar> {
    const newCar = new CarModel(carData);
    await newCar.save();
    return newCar;
  }

  async getCarById(carId: string): Promise<ICar | null> {
    return await CarModel.findById(carId);
  }

  async updateCar(
    carId: string,
    updateData: Partial<ICar>
  ): Promise<ICar | null> {
    return await CarModel.findByIdAndUpdate(carId, updateData, { new: true });
  }

  async deleteCar(carId: string): Promise<ICar | null> {
    return await CarModel.findByIdAndDelete(carId);
  }
}

export default new CarService();
