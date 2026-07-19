import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import StockList from '../components/data/StockList'

const Stock = () => {
  return (
    <div className='px-4 pt-20 pb-15 relative overflow-hidden'>
        <div className=''>
            <PageTopCard label='Market directory' title='Stock' subtitle='Discover established companies and the ideas moving global markets.' />

            <SearchBar asset='stock' />
        </div>
        <StockList />

        <div className='upper-glow'></div>
    </div>
  )
}

export default Stock