import { Router } from "express";
import {
  register,
  login,
  profile
} from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
import passport from "passport";
import { passportCall } from "../passport/passportCall.js";
import { roleAuthorization } from "../middlewares/roleAuthorization.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get('/private', 
  // passport.authenticate('jwt'),
  passportCall('jwt'), 
  profile
);  //headers

router.get('/private-cookies', [
  // passport.authenticate('jwtCookies'), 
  passportCall('jwtCookies'), 
  roleAuthorization('user')
], profile
); //cookies

export default router;
