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

//callback URL
router.get('/github', passport.authenticate('github', {
  failureRedirect: '/login',
  successRedirect: '/profile',
  passReqToCallback: true
}));

router.get('/logout', (req, res)=>{
  req.logout((err)=>{
    if(err) return res.send(err);
    res.redirect('/login');
  })
})

export default router;
