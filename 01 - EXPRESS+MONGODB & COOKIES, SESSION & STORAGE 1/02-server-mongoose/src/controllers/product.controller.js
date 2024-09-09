import ProductManager from "../manager/product.manager.js";
const prodManager = new ProductManager();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await prodManager.getAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { idProd } = req.params;
    const producto = await prodManager.getById(idProd);
    if (!producto) res.status(404).json({ message: "product not found" });
    else res.json(producto);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProd = await prodManager.create(req.body);
    res.json(newProd);
  } catch (error) {
    next(error);
  }
};
