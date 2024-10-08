import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', router.getRouter());
// app.use('/', routerViews)

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto: ${PORT}`);
});