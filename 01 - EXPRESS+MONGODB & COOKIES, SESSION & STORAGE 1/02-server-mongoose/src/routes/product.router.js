import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:idProd", getProductById);

router.post("/", createProduct);

export default router;
