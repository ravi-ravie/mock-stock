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

        <div className='flex justify-between items-center my-6'>
          <p className='text-[0.625rem] text-[#8f8e87] tracking-widest ml-1'>{etfs.length} assets</p>
          <ReactPaginate
            pageCount={Math.ceil(etfs.length / 20)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
            previousLabel="←"
            nextLabel="→"
            breakLabel={null}
            forcePage={page-1}

          />
        </div>

      <div className='flex flex-col gap-5'>
        {displayEtfs.map((etf, idx) => {
          return (
            
           <div key={idx} className='grid grid-cols-[minmax(0,1fr)_auto] gap-y-2.5 p-3.5 sm:p-4 border border-white/11 bg-[#191a1b] hover:bg-[#202123] hover:shadow-[inset_2px_0_0_var(--color-gold)] cursor-pointer'>

        <div className='col-span-2 flex items-center gap-2.5'>
          <img src={etf.img} className='size-8 rounded-full object-cover' alt={etf.name} />
          <p className='font-semibold text-[#f1eee8]'>{etf.name}</p>
        </div>

        <div className='col-start-1 row-start-2'>
          <p className='mb-0.75 text-[#818078] font-mono text-[9px] tracking-[0.8px]'>SYMBOL</p>
          <p className='font-mono text-[11px] text-[#a8a7a0]'>{etf.symbol?.toUpperCase() ?? 'N/A'}</p>
        </div>

        <p className='col-start-2 row-start-2 text-right font-mono text-[#ece9e1]'>₹{etf.price_inr?.toLocaleString('en-IN') ?? 'N/A'}</p>

        <div className='col-start-1 row-start-3'>
          <p className='mb-0.75 text-[#818078] font-mono text-[9px] tracking-[0.8px]'>24H CHANGE</p>
          <p className={`font-mono text-[11px] font-medium ${etf.change_24h_percent > 0 ? 'text-[#92af8a]' : 'text-[#c87966]'}`}>{etf.change_24h_percent?.toFixed(2) ?? 'N/A'}%</p>
        </div>

        <div className='col-start-2 row-start-3 text-right'>
          <p className='mb-0.75 text-[#818078] font-mono text-[9px] tracking-[0.8px]'>MARKET CAP</p>
          <p className='font-mono text-[10px] text-[#aaa9a2]'>₹{etf.market_cap_inr?.toLocaleString('en-IN', { notation: "compact", maximumFractionDigits: 2 }) ?? 'N/A'}</p>
        </div>

      </div>
          )
        })}
      </div>

      <div className='my-6  flex justify-center'>
        <ReactPaginate
          pageCount={Math.ceil(etfs.length / 20)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination new"
          activeClassName="active"
          previousLabel="←"
          nextLabel="→"
          breakLabel='...'
          forcePage={page-1}
        />
      </div>
    </div>
  )
}

export default EtfList