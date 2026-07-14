import React from 'react'
import ExploreCard from '../ui/ExploreCard'

const HomeLower = () => {
  return (
    <div className='bg-slate-400 px-5 py-20 flex flex-col gap-3'>
        <p><span></span>Find your focus</p>

        <div className=''>
            <h1>Markets, in <br/> your rhythm.</h1>
            <p>Explore the assets shaping tomorrow with a clearer, calmer view of the market.</p>
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