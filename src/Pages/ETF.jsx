import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import EtfList from '../components/data/EtfList'

const ETF = () => {
  return (
     <div className='px-4 pt-20 pb-15 md:px-18 md:pt-30 relative overflow-hidden'>
        <PageTopCard label='Diversified funds' title='ETF' subtitle='Build a wider view of the world through a single, considered investment.' />

        <EtfList />
        <div className='upper-glow'></div>
    </div>
  )
}

export default ETF