import React from 'react'

const Sidebar = (props) => {
  return (
    <div className = {`bg-slate-500 w-full  ${props.boolSidebar ? '' : '-translate-full'}`}>
        <div className=''>Crypto</div>
        <div>Stock</div>
        <div>ETF</div>
        <div>Project Info</div>
        <div>About Me</div>
    </div>
  )
}

export default Sidebar