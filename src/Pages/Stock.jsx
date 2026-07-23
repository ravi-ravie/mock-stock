import React from 'react'
import PageTopCard from '../components/ui/PageTopCard'
import StockList from '../components/data/StockList'

const Stock = () => {
  return (
    <div className='px-4 pt-20 pb-15 md:px-18 md:pt-30 relative overflow-hidden'>
        <PageTopCard label='Market directory' title='Stock' subtitle='Discover established companies and the ideas moving global markets.' />

        <StockList />

        <div className='upper-glow'></div>
    </div>
  )
}

export default Stock