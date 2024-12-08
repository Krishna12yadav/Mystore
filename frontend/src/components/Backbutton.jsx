import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Backbutton = () => {
    const navigate=useNavigate();
    const navigateHome=()=>{
       navigate('/')
    }
  return (
    <button className="px-2 py-1 flex items-center gap-[2px] " onClick={navigateHome}><IoArrowBackCircleOutline style={{color:'black'}} size={20}/>Home</button>
  )
}
