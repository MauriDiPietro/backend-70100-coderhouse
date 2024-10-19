import MySqlDao from "./mysql.dao.js";
import { UserModel } from "./models/user.model.js";

export default class UserDaoMySql extends MySqlDao {
  constructor() {
    super(UserModel);
  }

  getByEmail = async (email) => {
    try {
      return await this.model.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}
