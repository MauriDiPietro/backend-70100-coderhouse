import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import sessionFileStore from 'session-file-store';

const app = express();

const FileStore = sessionFileStore(session)

const sessionConfig = {
  store: new FileStore({
    path: './sessions',
    ttl: 180,
    reapInterval: 180
  }),
  secret: "1234",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 180000 },
};

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    username: "juan",
    password: "1234",
    admin: true,
  },
  {
    username: "jose",
    password: "1234",
    admin: false,
  },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const index = users.findIndex(
    (user) => user.username === username && user.password === password
  );
  if (index < 0) res.status(401).json({ msg: "no estas autorizado" });
  else {
    const user = users[index];
    // console.log(user)
    req.session.info = {
      loggedIn: true, 
      contador: 1,    
      admin: user.admin,  
    }
    // console.log(req.session)
    res.json({ msg: "bienvenido!", session: req.session });

  }
});

const validateLogin = (req, res, next) => {
    console.log(req.session.info.loggedIn)
    if(req.session.info.loggedIn) next();
    else res.status(401).json({ msg: "no estas autorizado" });
}

const isAdmin = (req, res, next) => {
    if(req.session.info.admin) next();
    else res.status(401).json({ msg: "solo administradores" });
}

app.get('/secret-endpoint', validateLogin, (req, res)=>{
    // console.log(req.session.info)
    req.session.info.contador++;
    res.json({
        contador: req.session.info.contador,
        session: req.session
    })
})

app.get('/admin', validateLogin, isAdmin, (req, res)=>{
    // console.log(req.session.info)
    req.session.info.contador++;
    res.json({
        msg: 'USER ADMIN',
        contador: req.session.info.contador,
        session: req.session
    })
})

app.post('/logout', (req, res)=>{
  req.session.destroy((error)=>{
    if(!error) res.send('logout ok')
      else res.send(error.message)
  })
})

app.listen(8080, () => console.log("server ok en puerto 8080"));
