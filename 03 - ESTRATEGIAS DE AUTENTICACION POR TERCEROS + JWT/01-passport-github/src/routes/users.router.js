import { Router } from "express";
import {
  registerResponse,
  loginResponse,
  githubResponse,
} from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
import passport from "passport";

const router = Router();

router.post("/register", passport.authenticate('register'), registerResponse);

router.post("/login", passport.authenticate('login'), loginResponse);

router.get('/private', isAuth, (req, res)=> res.send('INFORMACION CONFIDENCIAL'));

router.get('/register-github', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }), githubResponse);

export default router;
