import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './layouts/NavBar';
import SingleProduct from './pages/SingleProduct';
import { useEffect, } from 'react';
import { useState } from 'react';
import Footer from './layouts/Footer';
import Help from './pages/Help';



function App() {
const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
const [cart, setCart] = useState(cartItemsFromLocalStorage)
useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
},[cart])
let handleAddToCart = (product)=>{
  const productSelected = cart.find((singleCart)=>singleCart.id === product.id)
  if(productSelected){
    setCart(
      cart.map((oneItem)=> oneItem.id === productSelected.id ? {...productSelected,quantity : productSelected.quantity + 1}: oneItem)
    )
}else{
  setCart([...cart, {...productSelected,quantity:1}])
}
}
  return (
    <>
      <BrowserRouter>
      <NavBar cart={cart}/>
      <Routes>
       <Route index element={<Home cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />}/>
        <Route path='/Cart' element={<Cart cart={cart}  setCart={setCart} />}/>
        <Route path='/SingleProduct/:id' element={<SingleProduct cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart} />}/> 
        <Route path='/help' element={<Help/>} />
      </Routes>
      

      <Footer/>
      
      </BrowserRouter>
    </>
  )
  }






export default App
