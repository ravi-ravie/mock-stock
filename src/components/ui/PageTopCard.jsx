import React from 'react'

const PageTopCard = (props) => {
  return (
    <div className='border border-white/11 px-5 pt-6 pb-8.75 mb-6 bg-[#1c1d1e]/36'>
        <p className='font-mono text-[10px] uppercase tracking-[1.7px] text-lightGold mb-2 flex items-center gap-2.25'><span className='line-deco'></span>{props.label} </p>
        <h1 className='font-display font-semibold  text-[2.75rem] mb-1 whitespace-nowrap'>{props.title}<span className='golditalic'> market.</span></h1>
        <p className='text-[#9a9a94] text-[0.875rem]'>{props.subtitle}</p>
    </div>
  )
}

export default PageTopCard