import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginateModule from 'react-paginate';
const ReactPaginate = ReactPaginateModule.default;
import etfs from "../data/Etfs_1000.json";

const EtfList = () => {
    const [page, setPage] = useState(0)
    const itemsPerPage = 20;

    const offset = page * itemsPerPage 

    const displayEtfs = etfs.slice(offset, offset + itemsPerPage);

    
    const handlePageClick = (event) => {
        setPage(event.selected )
        
    }

  return (
    <div>
        <ReactPaginate
          pageCount={Math.ceil(etfs.length/20)}
          pageRangeDisplayed={7}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="←"
          nextLabel="→"
      />

      <div className='flex flex-col gap-5'>
        {displayEtfs.map((etf, idx) => {
          return (
            
            <div key={idx} className='bg-slate-500'>

            <div>
              <img src={etf.img} className='size-8' alt={etf.name}/>
              <p>{etf.name}</p>
            </div>

            <div>
              <div>
                <p>SYMBOL</p>
                <p>{etf.symbol?.toUpperCase() ?? 'N/A'}</p>
              </div>
              <p>{etf.price_inr?.toLocaleString('en-IN') ?? 'N/A'}</p>
            </div>

            <div>
              <div>
                <p>24H CHANGE</p>
                <p>{etf.change_24h_percent?.toFixed(2) ?? 'N/A'}</p>
              </div>

              <p>MARKET CAP</p>
              <p>{etf.market_cap_inr?.toLocaleString('en-IN', {
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
          pageCount={Math.ceil(etfs.length/20)}
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

export default EtfList