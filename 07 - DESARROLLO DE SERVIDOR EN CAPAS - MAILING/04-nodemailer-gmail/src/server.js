import express from "express";
import emailRouter from "./routes/email.router.js";

const app = express();

app.use(express.json());

app.use("/api", emailRouter);

app.listen(8080, () => console.log("server ok en ppuerto 8080"));
