import express from 'express';
import 'dotenv/config'
import { initMongoDB } from './database.js';
import config from './config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = config.PORT

initMongoDB().then(()=>console.log('db conectada')).catch((error)=>console.log(error))

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT} in ${config.NODE_ENV} mode`);
});



