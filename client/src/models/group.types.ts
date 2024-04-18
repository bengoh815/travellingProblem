// Base interface for form data
export interface IGroupBase {
  name: string;
  description: string;
}

// Extended interface for full group data including server-generated fields
export interface IGroup extends IGroupBase {
  _id: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

export interface IGroupState {
  group: IGroup | null;
  isLoading: boolean;
  error: string | null;
}
