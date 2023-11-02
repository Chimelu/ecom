import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Jewelry from '../component/Jewelry'


const Home = ({cart,handleAddToCart,setCart}) => {
    useEffect(()=>{
        document.title= 'Home | page'
    })
  return (
    <div className='container'>
        <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
        <Jewelry cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/> 
        
        
    </div>
  )
}

export default Home