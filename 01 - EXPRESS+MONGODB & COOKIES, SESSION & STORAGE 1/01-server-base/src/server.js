import express from "express";
import productRouter from "./routes/product.router.js";
import userRouter from "./routes/user.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(8080, () => console.log("server ok en puerto 8080"));
