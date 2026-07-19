import React from 'react'
import { RiSearchLine } from "@remixicon/react";

const SearchBar = (props) => {
  return (
    <div className='flex items-center gap-2.5 border border-white/11 bg-[#191a1b] transition-border duration-200 focus-within:border-gold/80 px-3.5 h-10.75'>
      <RiSearchLine className='text-[#aaa9a2]' size={15} />
      <input 
        className='bg-transparent border-0 outline-none text-[#f4f0e8] w-full text-[13px] placeholder:text-[#85857e]' 
        type="text" 
        maxLength={30} 
        placeholder={`Search ${props.asset}`}
      />
  </div>
  )
}

export default SearchBar