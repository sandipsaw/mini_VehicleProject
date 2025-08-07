import React, { useContext } from 'react'
import { vehiclecontext } from '../context/VehicleContext'

const Vehicle = () => {
  const [data,setdata] = useContext(vehiclecontext)
  const renderdata = data.map((vehicle,index)=>{
    return(
      <div >
      <div className='w-80 p-2 bg-white rounded text-black'>
        <div className='relative  w-100'>
          <img className='w-76' src={vehicle.image}/>
        <div className='text-white text-lg absolute top-2 left-2'>{vehicle.Cname}</div>
        </div>
        <div className='pt-2 flex flex-wrap gap-2 justify-around mb-1 font-semibold'>
          <h1 className='border rounded px-2'>{vehicle.name}</h1>
          <p className='border rounded px-2'>{vehicle.speed} km/hr</p>
          <p className='border rounded px-2'>{vehicle.Seat} Seat</p>
        </div>
        <p>{vehicle.desc} at rs{vehicle.amt}</p>
        <div className='flex gap-5 mt-2  '><button className='border rounded px-2 bg-green-400 border-green-400 text-white font-semibold '>Buy Now</button>
        <button className='border rounded px-2 bg-green-400 border-green-400 text-white font-semibold'>More Detail</button></div>
      </div>
      </div>
    )
  })
  return (
    <div className='flex flex-wrap mt-2 w-screen gap-5 item-center just'>{renderdata}</div>
  )
}

export default Vehicle