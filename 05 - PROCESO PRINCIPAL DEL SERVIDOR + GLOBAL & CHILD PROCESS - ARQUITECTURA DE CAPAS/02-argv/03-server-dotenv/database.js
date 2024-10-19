import { connect } from "mongoose";
// import 'dotenv/config'
import dotenv from "dotenv";
// dotenv.config();

const ENV = process.argv[2].toLocaleUpperCase() || "DEV";

dotenv.config({
  path:
    ENV === "PROD"
      ? "./.env.prod"
      : ENV === "STAGE"
      ? "./.env.stg"
      : "./.env.dev",
});

export const initMongoDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};
