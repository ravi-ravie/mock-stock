import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <div className = {`parent-nav overflow-hidden w-full ${props.boolSidebar ? '' : '-translate-full hidden'}`}>

        <Link to='/crypto'><p className='navLink'>Crypto</p></Link>
        <Link to='/stock'><p className='navLink'>Stock</p></Link>
        <Link to='/etf'><p className='navLink'>ETF</p></Link>
        <Link to='/projectInfo'><p className='navLink'>Project Info</p></Link>
        <Link to='/aboutMe'><p className='navLink'>About Me</p></Link>
    </div>
  )
}

export default Sidebar