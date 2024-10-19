import { connect } from 'mongoose';
import 'dotenv/config';

// export const initMongoDB = async () => {
//   try {
//     await connect(process.env.MONGO_ATLAS_URL || process.env.MONGO_LOCAL_URL);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export class ConnectMongoDB {
  static #instance;
  constructor(){
      connect(process.env.MONGO_ATLAS_URL || process.env.MONGO_LOCAL_URL)
  }

  static getInstance(){
      if(this.#instance){
          console.log('Ya está conectado a mongo');
          return this.#instance;
      } else {
          this.#instance = new ConnectMongoDB();
          console.log('conectado a mongodb');
          return this.#instance;
      }
  }
}