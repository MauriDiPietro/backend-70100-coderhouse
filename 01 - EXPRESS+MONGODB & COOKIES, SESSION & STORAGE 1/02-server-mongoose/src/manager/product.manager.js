import { ProductModel } from "../models/product.model.js";

export default class ProductManager {
  async getAll() {
    try {
      return await ProductModel.find({});
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(obj) {
    try {
      return await ProductModel.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(obj, id) {
    try {
      return await ProductModel.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id) {
    try {
      return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
