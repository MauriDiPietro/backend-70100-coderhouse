import express from "express";
import productRouter from "./routes/product.router.js";
import userRouter from "./routes/user.router.js";
import { initMongoDB } from "./config/db.connection.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);
app.use("/users", userRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("conectado a la db mongo"))
  .catch((error) => console.log(error));

app.listen(8080, () => console.log("server ok en puerto 8080"));
