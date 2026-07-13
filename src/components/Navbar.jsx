import React from 'react'
import { RiMenu5Fill } from "@remixicon/react";


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0  w-full flex justify-between'>
        <div className='flex'>
            <img src='/src/assets/logoMockStock.png'  alt="" className='size-8'/>
            <h2>mockStock</h2>
        </div>

        <div>
        <RiMenu5Fill />
        </div>
    </div>
  )
}

export default Navbar