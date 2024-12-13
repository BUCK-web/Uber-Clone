import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDb from './db/DB.js';
import userRouter from './routes/user.routes.js';



// uses of the Modules 
const app = express();
dotenv.config();
connectToDb();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Using the Routes 
app.use("/user",userRouter)


app.get("/",(req,res)=>{
    res.send("Hello World!");
})


export default app
