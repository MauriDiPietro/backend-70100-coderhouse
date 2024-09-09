import { createHash, isValidPassword } from "../../utils.js";
import { UserModel } from "./models/user.model.js";

export default class UserDao {
  async existUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async register(user) {
    try {
      const { email, password } = user;
      const existUser = await this.existUser(email);
      if (!existUser) return await UserModel.create({
        ...user,
        password: await createHash(password)
      });
      else return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(email, password) {
    try {
      const userExists = await UserModel.findOne({ email });
      if(userExists) {
        const passValid = await isValidPassword(password, userExists);
        if(!passValid) return passValid;
        else return userExists;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
