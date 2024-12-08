import { useParams} from "react-router-dom"
import { Backbutton } from "./Backbutton";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "./Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditProduct = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [err, setErr] = useState(false)


    const renderForm =async (e) => {
        e.preventDefault();
        if (!name || !price || !url) {
            setErr(true)

        }

        else {
            setErr(false)
            const product = { name, price, url }
            axios.put(`https://mystore-pl30.onrender.com/api/products/${id}`, product)
                setName('')
                setPrice('')
                setUrl('')
             await toast.success('Product is Updated!', {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
            
        }

    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://mystore-pl30.onrender.com/api/products/${id}`)
            .then((res) => {
                setName(res.data.data.name)
                setPrice(res.data.data.price)
                setUrl(res.data.data.url)
            })
        setLoading(false)
    }, []);

    const renderEditProduct = () => {
        return <div className="flex justify-center items-center">
            <form className=" w-[80%] md:w-[50%]  flex flex-col border border-slate-500 rounded w-[30%]">
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} className="rounded px-2 m-2 border border-slate-700" placeholder="name" />
                <input type='text' value={price} onChange={(e) => { setPrice(parseInt(e.target.value)) }} className="rounded px-2 m-2 border border-slate-700" placeholder="price" />
                <input type='text' value={url} onChange={(e) => { setUrl(e.target.value) }} className="rounded px-2 m-2 border border-slate-700" placeholder="url" />
                {err && <p className="text-red-600 p-4">*Please fill all the fields</p>}
                <button className='bg-green-600 text-white m-2 rounded' type="submit" onClick={renderForm}>Save Product</button>

            </form>

        </div>
    }

    return (<div><Navbar />
        <Backbutton /> <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        {loading ? (<Loader />) : renderEditProduct()}
    </div>
    )
}
