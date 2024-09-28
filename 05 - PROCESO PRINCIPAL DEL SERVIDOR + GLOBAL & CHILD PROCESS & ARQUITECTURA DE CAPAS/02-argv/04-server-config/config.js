import dotenv from "dotenv";

const ENV = process.argv[2].toLocaleUpperCase() || "DEV";

dotenv.config({
  path:
    ENV === "PROD"
      ? "./.env.prod"
      : ENV === "STAGE"
      ? "./.env.stg"
      : "./.env.dev",
});

export default {
    NODE_ENV: ENV || 'DEV',
    PORT: process.env.PORT || 8000,
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/coderhouse"
}


/*
dev --> deploy --> url --> .env     -----> feat/rama1   (juan)
                                    -----> feat/rama2   (alberto)
                                    -----> feat/rama3   (carlos)

stg - 
qas -
prod - master - main
*/