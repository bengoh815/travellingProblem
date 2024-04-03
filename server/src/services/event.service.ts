import EventModel, { IEvent } from "../models/event.model";

class EventService {
  async getAllEvents(): Promise<IEvent[]> {
    return await EventModel.find();
  }

  async createEvent(eventData: IEvent): Promise<IEvent> {
    const newEvent = new EventModel(eventData);
    await newEvent.save();
    return newEvent;
  }

  async getEventById(eventId: string): Promise<IEvent | null> {
    return await EventModel.findById(eventId);
  }

  async updateEvent(
    eventId: string,
    updateData: Partial<IEvent>
  ): Promise<IEvent | null> {
    return await EventModel.findByIdAndUpdate(eventId, updateData, {
      new: true,
    });
  }

  async deleteEvent(eventId: string): Promise<IEvent | null> {
    return await EventModel.findByIdAndDelete(eventId);
  }
}

export default new EventService();
