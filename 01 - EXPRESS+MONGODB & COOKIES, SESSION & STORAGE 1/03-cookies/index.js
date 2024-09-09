import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const SECRET_KEY = "1234";

app.use(cookieParser(SECRET_KEY));
app.use(express.json());

app.get("/set-cookie", (req, res) => {
  res.cookie("idioma", "ingles").json({ msg: "ok" });
});

app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  const { idioma } = req.cookies;
  idioma === "ingles" ? res.send("hello") : res.send("hola!");
});

app.get("/set2", (req, res) => {
  res.cookie("saludo", "hola", { maxAge: 3000 }).send({ msg: "ok" });
});

app.get("/set-signed-cookie", (req, res) => {
  res
    .cookie("nombre", "roman", { signed: true, httpOnly: true })
    .send({ msg: "ok" });
// res.clearCookie('idioma').send('clear')
});



app.listen(8080, () => console.log("server ok en puerto 8080"));
