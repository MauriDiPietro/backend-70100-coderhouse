import { Router } from "express";
import { isAuth } from "../middlewares/isAuth.js";
const router = Router();

router.get('/login', (req, res)=>{
    res.render('login')
});

router.get('/profile', isAuth, (req, res)=>{
    const user = req.user.toObject();
    res.render('profile', { user });
});

export default router;