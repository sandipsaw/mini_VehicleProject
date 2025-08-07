import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Vehicle from '../pages/Vehicle'
import Service from '../pages/Service'

const Mainroute = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/service' element={<Service />} />
        <Route path='/vehicle' element={<Vehicle />} />
      </Routes>
  )
}

export default Mainroute