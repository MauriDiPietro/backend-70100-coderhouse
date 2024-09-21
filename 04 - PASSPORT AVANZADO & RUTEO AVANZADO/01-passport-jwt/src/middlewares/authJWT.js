import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

export const generateToken = (user) => {
  const payload = {
    userId: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role
  };

  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: "15m",
  });
};

