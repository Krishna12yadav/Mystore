import mongoose from "mongoose";

const ProductSChema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    url:{
        type:String,
        required:true
    }
},{timestamps:true});
const Product=mongoose.model('Product',ProductSChema)
export default Product