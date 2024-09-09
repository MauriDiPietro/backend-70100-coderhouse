import {dirname} from 'path'
import { fileURLToPath } from 'url'
export const __dirname = dirname(fileURLToPath(import.meta.url))

// import { compare, genSalt, hash } from 'bcrypt'
import pkg from 'bcryptjs';
const { compare, genSalt, hash } = pkg;

/**
 * metodo que realiza el hasheo de la contraseña vía bcrypt
 * @param {*} password string (password sin hash)  
 * @returns string (password hasheada)
 */
export const createHash = async(password) => hash(password, await genSalt(10));

/**
 * 
 * @param {*} password contraseña del usuario sin hash
 * @param {*} user usuario existente en base de datos
 * @returns boolean
 */
export const isValidPassword = async(password, user) => compare(password, user.password);