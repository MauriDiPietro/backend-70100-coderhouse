import { Router } from "express";
import {
  registerResponse,
  loginResponse,
  passportResponse,
} from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
import passport from "passport";

const router = Router();

router.post("/register", passport.authenticate('register'), registerResponse);

router.post("/login", passport.authenticate('login'), loginResponse);

router.get('/private', isAuth, (req, res)=> res.send('INFORMACION CONFIDENCIAL'));

/* ------------------------------------ BOTON INICIAR CON GITHUB- ----------------------------------- */
router.get('/register-github', passport.authenticate('github', { scope: [ 'user:email' ] }));
/* ------------------------------------ - ----------------------------------- */

router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }), passportResponse);

/* ------------------------ BOTON INICIAR CON GOOGLE- ----------------------- */
router.get('/oauth2/redirect/accounts.google.com', passport.authenticate('google', { assignProperty: 'user' }), passportResponse)
/* ------------------------------------ - ----------------------------------- */

export default router;
