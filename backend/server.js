import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db.js';
import ProductsRoute from './Routes/ProductsRoute.js';
import path from 'path';

dotenv.config();

const _dirname=path.resolve()

const PORT=process.env.PORT||5000

const app=express();

app.use(cors());

app.use(express.json());

app.use('/api/products',ProductsRoute)

app.use(express.static(path.join(_dirname,'/frontend/dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'frontend','dist','index.html'))
})

app.listen(PORT,()=>{
    connectDB();
    console.log(`App is listening at http://localhost:${PORT}`)
})
//0DbpGUjca8b9YU3p 