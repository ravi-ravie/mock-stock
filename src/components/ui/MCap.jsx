import React from 'react'
import { RiSearchLine } from "@remixicon/react";

const MCap = () => {
  return (
    <div className='flex items-center w-full justify-center  gap-2.5 h-10.75 border border-white/11 bg-[#191a1b] px-3.5'>
      <span className='w-1.5 h-1.5 rounded-full bg-gold shrink-0' />
      <span className='text-[13px] text-[#f4f0e8] tracking-wide'>Top 20</span>
      <span className='text-[#85857e] text-[13px]'>by market cap</span>
    </div>
  )
}

export default MCap