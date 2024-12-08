import { Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Addproduct } from './components/Addproduct'
import './App.css'
import { EditProduct } from './components/EditProduct'
import { DeleteProduct } from './components/DeleteProduct'

function App() {
  return(<div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Addproduct/>}/>
      <Route path='/edit/:id'element={<EditProduct/>}/>
      <Route path='/delete/:id'element={<DeleteProduct/>}/>
    </Routes>

  </div>)
}


export default App
