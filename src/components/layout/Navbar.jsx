import React, { useState } from 'react'
import { RiMenu5Fill } from "@remixicon/react";
import Sidebar from './Sidebar';


const Navbar = () => {
  const [boolSidebar, setBoolSidebar] = useState(false);
  
  
  return (
    <div className='fixed top-0 left-0 w-full'>
      <div className='flex justify-between'>
          <div className='flex'>
              <img src='/src/assets/logoMockStock.png'  alt="" className='size-8'/>
              <h2>mockStock</h2>
          </div>

          <div>
          <RiMenu5Fill onClick={()=>{setBoolSidebar(prev => !prev)}} />
          </div>
      </div>

      <Sidebar boolSidebar={boolSidebar}/>
    </div>
  )
}

export default Navbar