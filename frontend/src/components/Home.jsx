import { useState,useEffect } from "react"
import axios from "axios"
import { Loader } from "./Loader"
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Home = () => {
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/api/products')
    .then((res)=>{
      setProducts(res.data.data)
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }, []);

  const renderProducts=()=>{
    return<div className="p-4 flex flex-col md:flex-row justify-center items-center gap-[5vmin] flex-wrap">
     {products.map((item)=><div key={item._id} className="border p-1 w-[80%] md:w-[30%] lg:w-[20%]
     border-slate-600
     drop-shadow-[0px_15px_15px_rgba(0,0,0,0.3)] ">
<div className=" flex items-center justify-center"><img className="md:h-[200px] object-fill p-2 rounded" src={item.url}/></div>
      <div className="bg-white text-left p-2 ">
      <h2 className="font-medium">{item.name}</h2>
      <p>Rs.{item.price}/-</p>
      <div className="flex justify-start items-center gap-[12px]"><div><Link to={`/edit/${item._id}`}><FaRegEdit/></Link></div><div><Link to={`/delete/${item._id}`}><MdOutlineDeleteOutline /></Link></div></div>

      </div>
     
      
     
    
      </div>)}
    </div>

  }


  return (
    <div className="text-center">
    <Navbar/>
    <div>
      
      {loading? (<Loader/>):renderProducts()}
      
      </div></div>
  )
}
//md:h-[360px]  lg:w-[20%] lg:h-[250px] xl:h-[350px]