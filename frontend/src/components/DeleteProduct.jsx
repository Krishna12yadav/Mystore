import { useParams ,useNavigate} from "react-router-dom"
import { Backbutton } from "./Backbutton";
import { Navbar } from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { Loader } from "./Loader";

export const DeleteProduct = () => {
const {id}=useParams();
const[loading,setLoading]=useState(false);
const navigate=useNavigate();

const renderDelete=()=>{
setLoading(true);
axios.delete(`http://localhost:5000/api/products/${id}`)
.then(()=>{
    navigate('/')
})

}

    const renderDeleteProduct=()=>{
        return<div className="flex flex-col justify-center items-center h-[50vh] gap-[12px]"><h3>Are you sure want to delete this Product?</h3>
        <button className="bg-red-600 text-white px-2 py-1" onClick={renderDelete}>Delete</button></div>

    }

    
    return (<div><Navbar/>
        <Backbutton/>
{loading? (<Loader/>):renderDeleteProduct()}
        </div>
        )
}
