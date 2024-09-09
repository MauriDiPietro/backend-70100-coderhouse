import { connect } from "mongoose";

const connectionString = "mongodb://localhost:27017/coderhouse";

export const initMongoDB = async () => {
  try {
    await connect(connectionString);
  } catch (error) {
    throw new Error(error);
  }
};
