import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import EtfList from '../components/data/EtfList'

const ETF = () => {
  return (
     <div className='px-4 pt-20 pb-15 relative overflow-hidden'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Diversified funds' title='ETF' subtitle='Build a wider view of the world through a single, considered investment.' />
            <SearchBar asset='crypto' />
        </div>

        <EtfList />
        <div className='upper-glow'></div>
    </div>
  )
}

export default ETF