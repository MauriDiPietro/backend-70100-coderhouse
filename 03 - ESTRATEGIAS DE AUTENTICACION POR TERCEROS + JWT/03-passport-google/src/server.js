import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import { initMongoDB } from "./db/connection.js";
import MongoStore from 'connect-mongo';
import { errorHandler } from "./middlewares/errorHandler.js";
import 'dotenv/config';
import passport from 'passport';
// import './passport/local-strategy.js';
// import './passport/github-strategy.js';
import './passport/google-strategy.js';

const app = express();

const sessionConfig = {
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000,
  },
  store: new MongoStore({
    mongoUrl:
      process.env.MONGO_URL,
    ttl: 60,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session(sessionConfig));

/* ------------------------------------ - ----------------------------------- */
app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------ - ----------------------------------- */
app.use("/users", usersRouter);

app.use(errorHandler);

initMongoDB().then(()=>console.log('base de datos coenctada'))
  .catch((error)=>console.log(error))

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
