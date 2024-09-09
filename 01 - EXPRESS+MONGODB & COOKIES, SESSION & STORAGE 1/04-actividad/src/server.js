import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import { dirname } from "./utils.js";
import viewsRouter from './routes/views.router.js'
import userRouter from './routes/user.router.js'

const app = express();

const SECRET_KEY = "1234";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(SECRET_KEY));

app.use('/', viewsRouter);
app.use('/user', userRouter);

app.engine("handlebars", handlebars.engine());
app.set("views", `${dirname}/src/views`);
app.set("view engine", "handlebars");

app.listen(8080, () => console.log("server ok en puerto 8080"));
