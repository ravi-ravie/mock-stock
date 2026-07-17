import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginateModule from 'react-paginate';
const ReactPaginate = ReactPaginateModule.default;
import stocks from "../data/stocks_1000.json";

const StockList = () => {
    const [page, setPage] = useState(0)
    const itemsPerPage = 20;

    const offset = page * itemsPerPage 

    const displayStocks = stocks.slice(offset, offset + itemsPerPage);

    
    const handlePageClick = (event) => {
        setPage(event.selected )
        
    }


  return (
    <div>

      <p>{stocks.length} assets</p>
      <ReactPaginate
          pageCount={Math.ceil(stocks.length/20)}
          pageRangeDisplayed={7}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="←"
          nextLabel="→"
      />

      <div className='flex flex-col gap-5'>
        {displayStocks.map((stock, idx) => {
          return (
            
            <div key={idx} className='bg-slate-500'>
            <div>
              <img src={stock.img} className='size-8' alt={stock.name}/>
              <p>{stock.name}</p>
            </div>

            <div>
              <div>
                <p>SYMBOL</p>
                <p>{stock.symbol?.toUpperCase() ?? 'N/A'}</p>
              </div>
              <p>{stock.price_inr?.toLocaleString('en-IN') ?? 'N/A'}</p>
            </div>

            <div>
              <div>
                <p>24H CHANGE</p>
                <p>{stock.change_24h_percent?.toFixed(2) ?? 'N/A'}</p>
              </div>

              <p>MARKET CAP</p>
              <p>{stock.market_cap_inr?.toLocaleString('en-IN', {
                notation: "compact",
                maximumFractionDigits: 2,
              }) ?? 'N/A'}</p>
            </div>

          </div>
          )
        })}
      </div>

      <h2>Current page: {page+1}</h2>
      <ReactPaginate
          pageCount={Math.ceil(stocks.length/20)}
          pageRangeDisplayed={7}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="←"
          nextLabel="→"
      />
    </div>
  )
}

export default StockList