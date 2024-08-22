import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchItem from './Components/SearchItem'
import ProductDetail from './Components/ProductDetail'
import Cart from './Components/Cart'
import { items } from './Data/data'
import { useState } from 'react'

function App() {
  const[data,setData] = useState([...items]);
  const[cart,setCart] = useState([])
  return <>
  <Router>
  <Navbar cart={cart} items={data}  setData={setData}/>
  <Routes> 
    <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>} />
    <Route path="/product/:id" element={<ProductDetail />}></Route>
    <Route path="/search/:term" element={<SearchItem />}></Route>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
  </Routes>
  </Router>
  </>
}

export default App
