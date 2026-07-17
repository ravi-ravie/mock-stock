import React from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './Pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Stock from './Pages/Stock'
import Crypto from './Pages/Crypto'
import ETF from './Pages/ETF'
import ProjectInfo from './Pages/ProjectInfo'
import AboutMe from './Pages/AboutMe'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/stock' element={<Stock />} />
        <Route path='/crypto' element={<Crypto />} />
        <Route path='/etf' element={<ETF />} />
        <Route path='/projectInfo' element={<ProjectInfo />} />
        <Route path='/aboutMe' element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default App