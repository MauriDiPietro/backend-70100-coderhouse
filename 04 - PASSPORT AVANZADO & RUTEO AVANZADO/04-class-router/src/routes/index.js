import { Router } from "express";

import productsRouter from "./products.router.js";
import usersRouter from "./users.router.js";
import cartsRouter from "./carts.router.js";

class MainRouter {
  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes() {
    this.router.use("/products", productsRouter);
    this.router.use("/users", usersRouter);
    this.router.use("/carts", cartsRouter);
  }

  getRouter(){
    return this.router;
  }
}

const router = new MainRouter();
export default router;
