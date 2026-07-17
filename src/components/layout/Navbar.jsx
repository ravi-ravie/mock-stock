import React, { useEffect, useState } from 'react'
import { RiMenu4Fill } from "@remixicon/react";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [boolSidebar, setBoolSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(()=>{

    const handleScroll = () => {
      if(window.scrollY >20){ setScrolled(true)}
      else {setScrolled(false)}
    }

    window.addEventListener('scroll', handleScroll)
  },[])

  return (
    <nav className='fixed top-0 left-0 w-full flex flex-col gap-0.5 font-sans'>
      <div className={`${scrolled? 'navbar scrolled' : 'navbar'} flex justify-between items-center py-2 pl-3 pr-6`}>
        <Link to='/'>
          <div className='flex items-center'>
              <img src='/src/assets/logoMockStock.png'  alt="" className='size-16'/>
              <h2 className='flex justify-center font-extrabold text-[1.7rem] '>mock<span className='text-lightGold'>Stock</span></h2>
          </div>
        </Link>
          <div>
          <RiMenu4Fill size={35} color='#c0beb6' onClick={()=>{setBoolSidebar(prev => !prev)}} />
          </div>
      </div>

      <Sidebar boolSidebar={boolSidebar}/>
    </nav>
  )
}

export default Navbar