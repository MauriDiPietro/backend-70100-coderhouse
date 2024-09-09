import { connect } from "mongoose";

export const initMongoDB = async () => {
  try {
    await connect(
      process.env.MONGO_URL || "mongodb://localhost:27017/coderhouse"
    );
  } catch (error) {
    throw new Error(error);
  }
};
