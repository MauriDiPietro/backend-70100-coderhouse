import { connect } from "mongoose";

class ConnectMongoDB {
    static #instance;
    constructor(){
        connect('mongodb://localhost:27017/coderhouse')
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

const con1 = ConnectMongoDB.getInstance();
const con2 = ConnectMongoDB.getInstance();
const con3 = ConnectMongoDB.getInstance();

