import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Jewelry from '../component/Women'
import Electronics from '../component/Electronics'
// import LastPage from '../component/LastPage'


const Home = ({cart,handleAddToCart,setCart}) => {
    useEffect(()=>{
        document.title= 'Home | page'
    })
  return (
    <div className='container'>
        <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
        <Electronics handleAddToCart={handleAddToCart} setCart={setCart}/>
        <Jewelry cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/> 
        {/* <LastPage/> */}
        
        
    </div>
  )
}

export default Home