import React, { useState } from 'react'
import axios from 'axios'
import ReactPaginateModule from 'react-paginate';
const ReactPaginate = ReactPaginateModule.default;


const CryptoList = () => {
    const [page, setPage] = useState(1)

    //const API_KEY = import.meta.env.VITE_CRYPTO_API_KEY;

    // const fetchCrypto = async () => {
    //     const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets' , 
    //     {
    //         params: {vs_currency: 'usd', order: 'market_cap_desc', per_page: 12, page, sparkline: false},
    //         headers: { 'x-cg-demo-api-key': API_KEY }
    //     })
    //     console.log(await result.data);
    // }

    // fetchCrypto();

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
        console.log('page selected : ', event.selected);
        
    }
    console.log(ReactPaginate.default);

  return (
    <div>
       <h2>Current page: {page}</h2>

        <ReactPaginate
            pageCount={10}
            pageRangeDisplayed={3}
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