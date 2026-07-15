import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
        <input className='w-full bg-amber-200' type="text" maxLength={30} placeholder={`search ${props.asset}`}/>
    </div>
  )
}

export default SearchBar