import Joi from "joi";

const registerSchema = Joi.object({
  first_name: Joi.string().min(3).max(20).required(),
  last_name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  // .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'es', 'co', 'uy', 'edu', 'org'] } })
  age: Joi.number(),
  password: Joi.string().alphanum().min(8).max(30),
  // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

export const userValidator = (req, res, next) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  error ? res.status(400).send(error) : next();
};
