import { Router } from "express";
import ProductManager from "../manager/product.manager.js";
const prodManager = new ProductManager("./products.json");
const router = Router();

router.get("/", async (req, res) => {
  try {
    //   res.send('hola')
    //   res.redirect('/home')
    // res.render('login')
    const { value } = req.query;
    const products = await prodManager.getAll();
    if (!value) res.json(products);
    const productsFilter = products.filter((p) => p.price > parseInt(value));
    res.json(productsFilter);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:idProd", async (req, res) => {
  try {
    const { idProd } = req.params;
    // console.log(idProd);
    const producto = await prodManager.getById(idProd);
    if (!producto) res.status(404).json({ message: "product not found" });
    else res.json(producto);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const newProd = await prodManager.create(req.body);
    res.json(newProd);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
