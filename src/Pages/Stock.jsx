import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import StockList from '../components/data/StockList'

const Stock = () => {
  return (
    <div className='main-padding'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Market directory' title='Stock market' subtitle='Discover established companies and the ideas moving global markets.' />
            <SearchBar asset='stock' />
        </div>
        <div>
            <StockList />
        </div>
    </div>
  )
}

export default Stock