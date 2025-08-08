import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Vehicle from '../pages/Vehicle'
import Service from '../pages/Service'
import VehicleDetail from '../pages/VehicleDetail'
const Mainroute = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/service' element={<Service />} />
        <Route path='/vehicle' element={<Vehicle />} />
        <Route path='/vehicle/detail/:id' element={<VehicleDetail />} />
      </Routes>
  )
}

export default Mainroute