import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginateModule from 'react-paginate';
import SearchBar from '../ui/SearchBar';
const ReactPaginate = ReactPaginateModule.default;


const CryptoList = () => {
    const [page, setPage] = useState(1)
    const [coins, setCoins] = useState([])

    const API_KEY = import.meta.env.VITE_CRYPTO_API_KEY;

    

    const fetchCrypto = async () => {
        const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets' , 
        {
            params: {vs_currency: 'inr', order: 'market_cap_desc', per_page: 20, page, sparkline: false},
            headers: { 'x-cg-demo-api-key': API_KEY }
        })
        setCoins(result.data)
    }

    useEffect(()=>{
      fetchCrypto();  
    },[page])

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <div>

      <div className='flex flex-col gap-6 sm:flex-row sm:justify-between my-6'>
        <div className='flex items-center gap-4'>
          <SearchBar asset='stock' />
          <p className='text-[0.688rem] text-[#8f8e87] hidden sm:flex text-nowrap  tracking-widest ml-1'>15000+ assets</p>
        </div>
        <div className='flex items-center'>
          <p className='text-[0.688rem] text-[#8f8e87] sm:hidden tracking-widest ml-1'>15000+ assets</p>
          <ReactPaginate
            pageCount={470}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
            previousLabel={null}
            nextLabel={null}
            breakLabel={null}
            forcePage={page-1}
            previousClassName="hidden-arrow"
            nextClassName="hidden-arrow"
          />
        </div>
      </div>

      <div className='border border-white/11 bg-[#18191a] overflow-x-auto hidden md:block'>
        <table className='border-collapse w-full min-w-175'>
          <thead>
            <tr>
              <th className='text-left text-[#8f8e87] uppercase tracking-[1.1px] font-mono text-[10px] font-normal py-4.25 px-5 border-b border-white/11'>Asset</th>
              <th className='text-left text-[#8f8e87] uppercase tracking-[1.1px] font-mono text-[10px] font-normal py-4.25 px-5 border-b border-white/11'>Symbol</th>
              <th className='text-left text-[#8f8e87] uppercase tracking-[1.1px] font-mono text-[10px] font-normal py-4.25 px-5 border-b border-white/11'>Price</th>
              <th className='text-left text-[#8f8e87] uppercase tracking-[1.1px] font-mono text-[10px] font-normal py-4.25 px-5 border-b border-white/11'>24h change</th>
              <th className='text-left text-[#8f8e87] uppercase tracking-[1.1px] font-mono text-[10px] font-normal py-4.25 px-5 border-b border-white/11'>Market cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, idx) => (
              <tr
                key={idx}
                className='cursor-pointer transition-colors hover:bg-[#222325] hover:shadow-[inset_2px_0_0_var(--color-gold)] [&:not(:last-child)>td]:border-b [&:not(:last-child)>td]:border-white/6.5'
              >
                <td className='py-4.25 px-5'>
                  <div className='flex items-center gap-3 font-semibold text-[#f1eee8]'>
                    <img src={coin.image ?? 'N/A'} className='size-8 rounded-full object-cover' alt={coin.name} />
                    {coin.name}
                  </div>
                </td>
                <td className='py-4.25 px-5 font-mono text-[11px] text-[#a8a7a0]'>
                  {coin.symbol?.toUpperCase() ?? 'N/A'}
                </td>
                <td className='py-4.25 px-5 font-mono text-[#ece9e1] text-[13px]'>
                  ₹{coin.current_price?.toLocaleString('en-IN') ?? 'N/A'}
                </td>
                <td className={`py-4.25 px-5 font-mono text-[11px] font-medium ${coin.price_change_percentage_24h > 0 ? 'text-[#92af8a]' : 'text-[#c87966]'}`}>
                  {coin.price_change_percentage_24h?.toFixed(2) ?? 'N/A'}%
                </td>
                <td className='py-4.25 px-5 font-mono text-[11px] text-[#aaa9a2]'>
                  ₹{coin.market_cap?.toLocaleString('en-IN', { notation: 'compact', maximumFractionDigits: 2 }) ?? 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex flex-col gap-5 md:hidden'>
        {coins.map((coin, idx) => {
          return (
            
            <div key={idx} className='grid grid-cols-[minmax(0,1fr)_auto] gap-y-2.5 p-3.5 sm:p-4 border border-white/11 bg-[#191a1b] hover:bg-[#202123] hover:shadow-[inset_2px_0_0_var(--color-gold)] cursor-pointer'>

        <div className='col-span-2 flex items-center gap-2.5'>
          <img src={coin.image ?? 'N/A'} className='size-8 rounded-full object-cover' alt={coin.name} />
          <p className='font-semibold text-[#f1eee8]'>{coin.name}</p>
        </div>

        <div className='col-start-1 row-start-2'>
          <p className='mb-0.75 text-[#818078] font-mono text-[9px] tracking-[0.8px]'>SYMBOL</p>
          <p className='font-mono text-[11px] text-[#a8a7a0]'>{coin.symbol?.toUpperCase() ?? 'N/A'}</p>
        </div>

        <p className='col-start-2 row-start-2 text-right font-mono text-[#ece9e1]'>₹{coin.current_price?.toLocaleString('en-IN') ?? 'N/A'}</p>

        <div className='col-start-1 row-start-3'>
          <p className='mb-0.75 text-[#818078] font-mono text-[9px] tracking-[0.8px]'>24H CHANGE</p>
          <p className={`font-mono text-[11px] font-medium ${coin.price_change_percentage_24h > 0 ? 'text-[#92af8a]' : 'text-[#c87966]'}`}>{coin.price_change_percentage_24h?.toFixed(2) ?? 'N/A'}%</p>
        </div>

        <div className='col-start-2 row-start-3 text-right'>
          <p className='mb-0.75 text-[#818078] font-mono text-[9px] tracking-[0.8px]'>MARKET CAP</p>
          <p className='font-mono text-[10px] text-[#aaa9a2]'>₹{coin.market_cap?.toLocaleString('en-IN', { notation: "compact", maximumFractionDigits: 2 }) ?? 'N/A'}</p>
        </div>

      </div>
          )
        })}
      </div>


     <div className='my-6  flex justify-center'>
        <ReactPaginate
          pageCount={470}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination new"
          activeClassName="active"
          previousLabel="←"
          nextLabel="→"
          breakLabel={null}
          forcePage={page-1}

        />
      </div>
    </div>
  )
}

export default CryptoList