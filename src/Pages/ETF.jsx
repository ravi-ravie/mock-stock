import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import EtfList from '../components/data/EtfList'

const ETF = () => {
  return (
     <div className='main-padding'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Diversified funds' title='ETF market' subtitle='Build a wider view of the world through a single, considered investment.' />
            <SearchBar asset='crypto' />
        </div>

        <EtfList />
    </div>
  )
}

export default ETF