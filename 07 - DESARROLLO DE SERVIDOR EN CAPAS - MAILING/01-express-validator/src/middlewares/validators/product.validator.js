import { param, validationResult } from 'express-validator';

export const productValidatorParams = [
    param('id', 'Debes insertar un valor de mas de 24 caracteres')
        .isLength({ min:24 }),
        // .custom((value)=>{
        //     if(typeof value !== 'string') throw new Error('formato de id invalido')
        // }),
        (req, res, next) =>{
            try {
                validationResult(req).throw();
                return
            } catch (error) {
                res.status(400).send(error)
            }
        }
]