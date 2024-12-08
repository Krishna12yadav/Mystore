
import express from 'express'
import mongoose from 'mongoose';
import Product from '../Models/ProductsModel.js'

const ProductsRoute=express.Router();

ProductsRoute.get('/',async(req,res)=>{
    try {
        const products=await Product.find({})
            res.status(200).json({success:true,data:products})
        
        
    } catch (error) {
        console.error(error.message)
        res.status(400).json({success:flase,message:"Error in fetching all products"})
        
    }

})

ProductsRoute.get('/:id',async(req,res)=>{
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid id"})
    }
    try {
        const product=await Product.findById(id)
            res.status(200).json({success:true,data:product})
        
        
    } catch (error) {
        console.error(error.message)
        res.status(400).json({success:flase,message:"Error in fetching a product"})
        
    }

})



ProductsRoute.put('/:id',async(req,res)=>{
    const {id}=req.params
    const product=req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false,message:"invalid id"})
    }

    try {
        const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,data:updatedProduct})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({success:false,message:"server error"})
        
    }
})

ProductsRoute.post('/',async(req,res)=>{
    const product=req.body;
    if(!product.name || !product.price || !product.url ){
        return res.status(400).json({success:false,message:'Provide all fields'})
    }
    const newProduct=await new Product(product)
    try {
        await newProduct.save()
            res.status(200).json({success:true,data:newProduct})
        
        
    } catch (error) {
        console.error(error.message)
        res.status(400).json({success:flase,message:"Error in adding a book"})
        
    }

})

ProductsRoute.delete('/:id',async(req,res)=>{
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid id"})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({message:'product deleted successfully',success:true})
    } catch (error) {
       
        res.status(500).send({message:error.message})
        
    }

});

export default ProductsRoute
