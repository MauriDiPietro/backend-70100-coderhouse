import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export default class ProductManager {
  constructor(path) {
    this.path = path;
  }
  async getAll() {
    try {
      if (fs.existsSync(this.path)) {
        const products = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(products);
      } else return [];
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(obj) {
    try {
      const product = {
        ...obj,
        id: uuidv4(),
      };
      const products = await this.getAll();
      const productExist = await this.getById(product.id);
      if (productExist) return null;
      products.push(product);
      await fs.promises.writeFile(this.path, JSON.stringify(products));
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getById(id) {
    try {
      const products = await this.getAll();
      const productExist = products.find((p) => p.id === id);
      if (!productExist) return null;
      return productExist;
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(obj, id) {
    try {
      const products = await this.getAll();
      let productExist = products.find((p) => p.id === id);
      if (!productExist) return null;
      productExist = { ...productExist, ...obj };
      const newArray = products.filter((p) => p.id !== id);
      newArray.push(productExist);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return productExist;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id) {
    try {
      const productExist = await this.getById(id);
      if (productExist) {
        const newArray = products.filter((p) => p.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
        return productExist;
      } else return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}
