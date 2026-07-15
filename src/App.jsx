import React from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './Pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Stock from './Pages/Stock'
import Crypto from './Pages/Crypto'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/stock' element={<Stock />} />
        <Route path='/crypto' element={<Crypto />} />
      </Routes>
    </div>
  )
}

export default App