import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
  const adds = 'YOU ORDER, WE DELIVER '

  return (
    <div >
     <Marquee className='mark' speed={90} style={{backgroundColor: 'red',color:'white',height: "4rem"}}>
      <h1>
      {adds} 
      <span style={{backgroundColor: 'blue'}}>FOR FREE 🛒</span> 
      </h1>
     </Marquee>
    </div>
   
    
  )
  
}

export default Marque