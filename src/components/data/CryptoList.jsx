import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginateModule from 'react-paginate';
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
      // fetchCrypto();  
    },[page])

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
        
    }

  return (
    <div>

      <p>15000+ assets</p>
      <ReactPaginate
          pageCount={813}
          pageRangeDisplayed={7}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="←"
          nextLabel="→"
      />

      <div className='flex flex-col gap-5'>
        {coins.map((coin, idx) => {
          return (
            
            <div key={idx} className='bg-slate-500'>

            <div>
              <img src={coin.image ?? 'N/A'} className='size-8' alt={coin.name} />
              <p>{coin.name}</p>
            </div>x

            <div>
              <div>
                <p>SYMBOL</p>
                <p>{coin.symbol?.toUpperCase() ?? 'N/A'}</p>
              </div>
              <p>{coin.current_price?.toLocaleString('en-IN') ?? 'N/A'}</p>
            </div>

            <div>
              <div>
                <p>24H CHANGE</p>
                <p>{coin.price_change_percentage_24h?.toFixed(2) ?? 'N/A'}</p>
              </div>

              <p>MARKET CAP</p>
              <p>{coin.market_cap?.toLocaleString('en-IN', {
                notation: "compact",
                maximumFractionDigits: 2,
              }) ?? 'N/A'}</p>
            </div>

          </div>
          )
        })}
      </div>


      <h2>Current page: {page}</h2>
      <ReactPaginate
          pageCount={813}
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

export default CryptoList