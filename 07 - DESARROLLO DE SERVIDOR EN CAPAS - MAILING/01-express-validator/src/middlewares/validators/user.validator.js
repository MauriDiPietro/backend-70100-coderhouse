import { check, validationResult } from "express-validator";

export const userValidator = [
  check("first_name", "Debes insertar un texto en el campo first_name")
    .exists()
    .not()
    .isEmpty()
    .isString(),
  check("last_name", "Debes insertar un texto en el campo last_name")
    .exists()
    .not()
    .isEmpty()
    .isString(),
  check("email", "Debes insertar un texto de tipo email")
    .exists()
    .not()
    .isEmpty()
    .isEmail(),
  check("password", "Debes insertar un texto (alfanumerico) con 8 caracteres como minimo")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 8 }),
    (req, res, next)=>{
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(400).send(error);
        }
    }
];
