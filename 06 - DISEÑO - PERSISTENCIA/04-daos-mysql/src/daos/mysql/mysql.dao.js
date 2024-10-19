export default class MySqlDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  getById = async (id) => {
    try {
      return await this.model.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  async create(obj) {
    try {
        console.log(obj)
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.update(obj, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
