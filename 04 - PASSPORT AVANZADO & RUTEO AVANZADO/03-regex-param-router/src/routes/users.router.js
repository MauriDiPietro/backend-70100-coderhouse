import { Router } from "express";
const router = Router();

// router.get('/:email', (req, res)=>{
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
//     const { email } = req.params;

//     if(email.match(emailRegex)){
//         //await services.getByemail.................
//         res.send('email valido')
//     } else res.status(400).send('email invalido')
// })

router.get(
  "/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})",
  (req, res) => {
    res.send("email valido");
  }
);

router.get("/name/:name([a-zA-Z]+)", (req, res) => {
  res.send("nombre sin numeros");
});

router.get("/email/:email2", (req, res) => {
  res.send("email valido");
});

router.param("email2", (req, res, next, email2) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const isValid = email2.match(emailRegex);
  if (!isValid) res.status(400).send("email invalido desde middleware param");
  else next();
});

router.get("*", (req, res) => {
  res.json({ msg: "Ruta inexistente" });
});

export default router;
