import React from 'react'
import ExploreCard from '../ui/ExploreCard'
import stockImg from '../../assets/stock.png'
import cryptoImg from '../../assets/crypto.png'
import etfImg from '../../assets/etf.png'

const HomeLower = () => {
  return (
    <div className=' px-4 pt-18 pb-15  flex flex-col gap-3'>
        <p className='flex items-center gap-4 text-lightGold text-[0.625rem] tracking-[2px] [word-spacing:5px] font-mono uppercase'><span className='line-deco'></span>Find your focus</p>

        <div className='flex flex-col gap-3'>
            <h1 className='text-5xl font-semibold font-display'>One place <br/> Every <span className='text-lightGold italic'>market.</span></h1>
            <p className='text-sm text-[#c7c7c1] leading-8 tracking-wide font-sans'>Navigate the big picture or zoom in on what matters. The market is vast; your view can be simple.</p>
        </div>

        <div className='grid grid-cols-1 gap-3.5 '>
          <ExploreCard cardnum='01' image={stockImg} subtitle='EQUITIES' asset='Stock' view='stocks'/>
          <ExploreCard cardnum='02' image={cryptoImg} subtitle='DIGITAL ASSETS' asset='Crypto' view='crypto'/>
          <ExploreCard cardnum='03' image={etfImg} subtitle='CURATED EXOSURE' asset='ETF' view='ETFs'/>
        </div>
    </div>
  )
}

export default HomeLower