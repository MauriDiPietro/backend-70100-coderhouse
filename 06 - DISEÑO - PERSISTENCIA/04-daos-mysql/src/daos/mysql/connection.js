import { Sequelize } from 'sequelize';

const db = new Sequelize('coderhouse', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const initMySqlDB = async () =>{
    try {
        await db.sync({ force: false });
        console.log('conectado a la db mysql');
    } catch (error) {
        console.log(error);
        
    }
}

export default db;