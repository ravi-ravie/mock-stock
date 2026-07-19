import React from 'react'
import ExploreCard from '../ui/ExploreCard'

const HomeLower = () => {
  return (
    <div className=' px-8 py-20 flex flex-col gap-3'>
        <p className='flex items-center gap-4 text-lightGold text-xs tracking-[2px] [word-spacing:5px] font-mono uppercase'><span className='line-deco'></span>Find your focus</p>

        <div className=''>
            <h1 className='text-5xl font-semibold font-display'>One place <br/> Every <span className='text-lightGold italic'>market.</span></h1>
            <p className='text-xl text-[#c7c7c1] leading-8 tracking-wide font-sans'>Navigate the big picture or zoom in on what matters. The market is vast; your view can be simple.</p>
        </div>

        <div className='gap-3 flex flex-col'>
          <ExploreCard cardnum='01' subtitle='EQUITIES' asset='Stock' view='stocks'/>
          <ExploreCard cardnum='02' subtitle='DIGITAL ASSETS' asset='Crypto' view='crypto'/>
          <ExploreCard cardnum='03' subtitle='CURATED EXOSURE' asset='ETF' view='ETFs'/>
        </div>
    </div>
  )
}

export default HomeLower