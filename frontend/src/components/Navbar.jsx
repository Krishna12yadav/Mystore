import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate=useNavigate();
  return (<>
    <div className="p-4 flex items-center justify-between">
    <button onClick={()=>{navigate('/')}}>  <h1 className="font-medium text-3xl">MyStore</h1></button>
      
        <div>
            <Link to='/create'> <MdOutlineAddBox size={20}/></Link>
        </div>

       
    </div>
    <hr className="border-slate-400"/></>
  )
}
