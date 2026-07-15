import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import SearchBar from '../components/ui/SearchBar'
import StockList from '../components/stock/StockList'

const Stock = () => {
  return (
    <div className='main-padding'>
        <div className='flex flex-col gap-3'>
            <PageTopCard label='Diversified funds' title='ETF market' subtitle='Build a wider view of the world through a single, considered investment.' />
            <SearchBar asset='stock' />
        </div>
        <div>
            <StockList />
        </div>
    </div>
  )
}

export default Stock