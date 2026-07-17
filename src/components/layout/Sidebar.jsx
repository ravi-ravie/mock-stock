import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <div className = {`bg-slate-500 w-full  ${props.boolSidebar ? '' : '-translate-full'}`}>

        <Link to='/crypto'><p>Crypto</p></Link>
        <Link to='/stock'><p>Stock</p></Link>
        <Link to='/etf'><p>ETF</p></Link>
        <Link to='/projectInfo'><p>Project Info</p></Link>
        <Link to='/aboutMe'><p>About Me</p></Link>
    </div>
  )
}

export default Sidebar