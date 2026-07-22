import React from 'react'
import { Link } from 'react-router-dom'



const Sidebar = (props) => {


  return (
    <div className={`${props.className} ${props.boolSidebar ? "open" : "hidden"}`}>

      <Link to='/crypto'><p className={`${props.linkClass} ${props.active==='/crypto' ? 'active' :''}`}>Crypto</p></Link>
      <Link to='/stock'><p className={`${props.linkClass} ${props.active==='/stock' ? 'active' :''}`}>Stock</p></Link>
      <Link to='/etf'><p className={`${props.linkClass} ${props.active==='/etf' ? 'active' :''}`}>ETF</p></Link>
      <Link to='/projectInfo'><p className={`${props.linkClass} ${props.active==='/projectInfo' ? 'active' :''}`}>Project Info</p></Link>
      <Link to='/aboutMe'><p className={`${props.linkClass} ${props.active==='/aboutMe' ? 'active' :''}`}>About Me</p></Link>
    </div>
  )
}

export default Sidebar