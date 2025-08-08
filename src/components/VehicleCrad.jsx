import React from 'react'
import { Link } from 'react-router-dom'
const VehicleCrad = (props) => {
    const { id, image, Cname, name, speed, Seat, desc, amt } = props.vehicle
    return (
        <Link to={`/vehicle/detail/${id}`} className='hover:scale-105 transition-transform duration-300 w-78 p-2 bg-gray-800 rounded shadow-amber-950 text-white'>
            <div className='relative'>
                <img className='w-74 h-50' src={image} />
                <div className='text-black text-lg font-bold absolute top-1 left-2'>{Cname}</div>
            </div>
            <div className='pt-3 flex flex-wrap gap-2 justify-around mb-1 font-semibold'>
                <h1 className='border rounded px-2'>{name}</h1>
                <p className='border rounded px-2'>{speed}</p>
                <p className='border rounded px-2'>{Seat} Seat</p>
            </div>
            
            <p>{desc.slice(0, 100)}...{""}<span className='text-blue-400'>more</span></p>
            {/* <div className='flex gap-5 mt-2  '>
                <button className='border rounded px-2 bg-green-400 border-green-400 text-white font-semibold '>Buy Now</button>
                <button className='border rounded px-2 bg-green-400 border-green-400 text-white font-semibold'>More Detail</button>
            </div> */}
        </Link>
    )
}

export default VehicleCrad