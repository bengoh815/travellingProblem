import mongoose from "mongoose";

const MONGODB_URI: string =
  process.env.MONGODB_URI_TEST || "mongodb://localhost:27017/mydb";

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
