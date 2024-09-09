import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  const { name, email } = req.body;
  res.cookie('user', email, { maxAge: 15000 }).send("cookie agregada con exito");
});

router.get("/get-cookie", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

export default router;
