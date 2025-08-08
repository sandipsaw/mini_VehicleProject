import React, { useContext } from 'react'
import { vehiclecontext } from '../context/VehicleContext'
import VehicleCrad from '../components/VehicleCrad'
const Vehicle = () => {
  const [data, setdata] = useContext(vehiclecontext)

  const renderdata = data.map((vehicle) => (
    <VehicleCrad vehicle={vehicle} key={vehicle.id} />
  ))
  return (
    <div className='flex pl-4 flex-wrap mt-2 w-screen gap-5 item-center just'>{renderdata}</div>
  )
}

export default Vehicle