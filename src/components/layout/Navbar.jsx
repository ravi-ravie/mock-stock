import React, { useEffect, useState } from 'react'
import { RiMenu4Fill } from "@remixicon/react";
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import cryptoImg from '../../assets/logoMockStock.png'


const Navbar = () => {
  const [boolSidebar, setBoolSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation();

  
  useEffect(()=>{

    const handleScroll = () => {
      if(window.scrollY >20){ setScrolled(true)}
      else {setScrolled(false)}
    }

    window.addEventListener('scroll', handleScroll)
  },[])

  return (
    <nav className='fixed top-px  left-0 w-full z-100 flex flex-col gap-0.5 font-sans'>
      <div className={`${scrolled? 'navbar scrolled' : 'navbar'} ${location.pathname !== '/' ? 'navbar scrolled' : ''} flex justify-between items-center sm:px-10 py-2 pl-3 pr-6`}>
        <Link to='/'>
          <div className='flex items-center'>
              <img src='/src/assets/logoMockStock.png'  alt="" className='size-12'/>
              <h2 className='flex justify-center font-bold text-xl sm:text-2xl '>mock<span className='text-lightGold'>Stock</span></h2>
          </div>
        </Link>

        <div>
        <Sidebar className={'md:flex gap-10 w-full '} linkClass={'text-[0.813rem] text-[#cccac4] hover:text-[#f4f0e8] relative navAfterEffect'} active={location.pathname} />
        </div>

        <div className='md:hidden'>
        <RiMenu4Fill size={25} color='#c0beb6' onClick={()=>{setBoolSidebar(prev => !prev)}} />
        </div>

        
      </div>

      <Sidebar boolSidebar={boolSidebar} className={'parent-nav  w-full'} linkClass={'navLink navEffects'} />
    </nav>
  )
}

export default Navbar