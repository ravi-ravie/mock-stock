import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  
  return (
    <div className = {`parent-nav overflow-hidden w-full ${  props.boolSidebar ? "open" : "hidden" }`}>

        <Link to='/crypto'><p className='navLink navEffects '>Crypto</p></Link>
        <Link to='/stock'><p className='navLink navEffects'>Stock</p></Link>
        <Link to='/etf'><p className='navLink navEffects'>ETF</p></Link>
        <Link to='/projectInfo'><p className='navLink navEffects'>Project Info</p></Link>
        <Link to='/aboutMe'><p className='navLink navEffects'>About Me</p></Link>
    </div>
  )
}

export default Sidebar