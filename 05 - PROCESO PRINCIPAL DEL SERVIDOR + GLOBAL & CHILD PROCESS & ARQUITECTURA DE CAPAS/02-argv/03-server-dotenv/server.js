import express from 'express';
import 'dotenv/config'
import './database.js';
import { initMongoDB } from './database.js';
import dotenv from "dotenv";
const ENV = process.argv[2].toUpperCase() || "DEV";
console.log(ENV);

dotenv.config({
  path:
    ENV === "PROD"
      ? "./.env.prod"
      : ENV === "STAGE"
      ? "./.env.stg"
      : "./.env.dev",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT

initMongoDB().then(()=>console.log('db conectada')).catch((error)=>console.log(error))

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});



