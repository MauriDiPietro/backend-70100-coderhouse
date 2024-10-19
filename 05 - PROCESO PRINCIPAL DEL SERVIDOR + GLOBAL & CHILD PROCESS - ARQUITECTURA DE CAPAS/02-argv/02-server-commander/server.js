import express from 'express';
import { program } from 'commander';

const app = express();

program
    .option('-p <port>', 'port server', 8080)
    .option('-e <environment>', 'env server', 'DEV')

program.parse();

console.log(program.opts());
console.log(program.args);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = program.opts().p
const ENV = program.opts().e

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`mode: ${ENV}`);
});

