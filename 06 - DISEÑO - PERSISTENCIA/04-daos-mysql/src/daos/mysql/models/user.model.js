import { DataTypes } from "sequelize";
import db from "../connection.js";

export const UserModel = db.define("users", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
  isGithub: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isGoogle: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  cart: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
});
