import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import EtfList from '../components/data/EtfList'

const ETF = () => {
  return (
     <div className='main-padding'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Digital assets' title='Crypto market.' subtitle='Follow the currencies and protocols defining the next financial frontier.' />
            <SearchBar asset='crypto' />
        </div>

        <EtfList />
    </div>
  )
}

export default ETF