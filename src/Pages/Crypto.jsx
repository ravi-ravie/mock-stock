import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import CryptoList from '../components/data/CryptoList'

const Crypto = () => {

  return (
    <div className='px-4 pt-20 pb-15 relative overflow-hidden'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Digital assets' title='Crypto' subtitle='Follow the currencies and protocols defining the next financial frontier.' />
            <SearchBar asset='crypto' />
        </div>

        <CryptoList />
        <div className='upper-glow'></div>
    </div>
  )
}

export default Crypto