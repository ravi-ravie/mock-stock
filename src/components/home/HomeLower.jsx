import React from 'react'
import ExploreCard from '../ui/ExploreCard'
import stockImg from '../../assets/stock.png'
import cryptoImg from '../../assets/crypto.png'
import etfImg from '../../assets/etf.png'

const HomeLower = () => {
  return (
    <div className=' px-4 sm:px-12 md:px-20 md:pt-24 pt-18 pb-15  flex flex-col gap-15 '>
      <div className='flex flex-col gap-3 '>
        <p className='flex items-center gap-4 text-lightGold text-[0.625rem] tracking-[2px] [word-spacing:5px] font-mono uppercase px-2 '><span className='line-deco'></span>Find your focus</p>

        <div className='flex flex-col lg:flex-row lg:justify-between gap-3 px-2 '>
          <h1 className='text-5xl lg:text-6xl font-semibold font-display'>One place <br /> Every <span className='text-lightGold italic'>market.</span></h1>
          <p className='text-sm text-[#9a9a94] leading-8 tracking-wide flex items-end font-sans lg:max-w-80'>Navigate the big picture or zoom in on what matters. The market is vast; your view can be simple.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[60%_40%] gap-3.5 '>
        <ExploreCard cardnum='01' image={stockImg} subtitle='EQUITIES' asset='Stock' view='stocks' className="md:row-span-2 flex-1" />
        <ExploreCard cardnum='02' image={cryptoImg} subtitle='DIGITAL ASSETS' asset='Crypto' view='crypto' className="md:col-start-2 md:row-start-1" />
        <ExploreCard cardnum='03' image={etfImg} subtitle='CURATED EXOSURE' asset='ETF' view='ETFs' className="md:col-start-2 md:row-start-2" />
      </div>
    </div>
  )
}

export default HomeLower