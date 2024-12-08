import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
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

 const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT,()=>{
    console.log(`App is listening at http://localhost:${PORT}`)
})
        console.log(`MongoDB Connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error ${error.message}`)
        
    }
}
 connectDB();


//0DbpGUjca8b9YU3p 
