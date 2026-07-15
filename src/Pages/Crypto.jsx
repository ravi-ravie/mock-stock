import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import CryptoList from '../components/stock/CryptoList'

const Crypto = () => {

  return (
    <div className='main-padding'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Digital assets' title='Crypto market.' subtitle='Follow the currencies and protocols defining the next financial frontier.' />
            <SearchBar asset='crypto' />
        </div>

        <CryptoList />
    </div>
  )
}

export default Crypto