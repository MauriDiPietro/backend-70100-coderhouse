import { Router } from "express";

const router = Router();


router.get("/", async (req, res) => {
    res.send('ruta users')
});

router.post("/", async (req, res) => {
});

export default router;