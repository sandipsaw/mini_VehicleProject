import React, { useContext } from 'react'
import { vehiclecontext } from '../context/VehicleContext'
import { useParams } from 'react-router-dom'

const VehicleDetail = () => {
    const [data, setdata] = useContext(vehiclecontext)
    const params = useParams()
    const vehicle = data.find((vehicle) => {
        return (
            params.id == vehicle.id
        )
    })
    return vehicle ?
        <div className='p-10 flex justify-around h-full  w-full'>
            <div className='w-150'><h2 className='text-white mb-4 text-5xl font-bold'>{vehicle.Cname}</h2>
                <img className='border rounded border-gray-700 object-contain h-100' src={vehicle.image} /></div>

            <div className='w-150 overflow-y-auto'>
                <p className='text-2xl'>{vehicle.desc}</p>

                <div className="flex text-yellow-400 text-2xl">
                    ★★★★☆
                </div>
                <p className="text-white-700 text-lg">(4.2 out of 5 based on 128 reviews)</p>
                <hr />

                <h2 className='text-2xl mt-2'>Vehicle Detail</h2>
                <div className='grid grid-cols-2 gap-y-2 text-gray-800" gap-x-2 w-80 mb-2'>
                    <p>Fuel Type :</p><p> {vehicle.fuel}</p>
                    <p>Mileage : </p><p>{vehicle.mileage} Km/L</p>
                    <p>Top Speed : </p><p>{vehicle.speed}</p>
                    <p>Seating Capacity : </p><p>{vehicle.Seat} Seat</p>
                    <p>EngineCC : </p><p>{vehicle.engine}cc</p>
                </div>
                <hr />
                <p className="text-xl text-green-600 font-semibold">₹{vehicle.amt}</p>
                <p className="text-xl text-gray-500">EMI starts from ₹8,000/month</p>
                <div class="flex gap-4 mt-4">
  <button class="bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
  <button class="bg-orange-600 text-white px-4 py-2 rounded">Buy Now</button>
</div>
            </div>



        </div> : "Loading..."
}

export default VehicleDetail