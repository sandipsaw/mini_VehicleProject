import React, { useContext } from 'react'
import { vehiclecontext } from '../context/VehicleContext'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const VehicleDetail = () => {
    const [data, setdata] = useContext(vehiclecontext)
    const navigate = useNavigate();
    const params = useParams()
    const vehicle = data.find((vehicle) => {
        return (
            params.id == vehicle.id
        )
    })
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: vehicle.name,
            Cname:vehicle.Cname,
            Seat:vehicle.Seat,
            mileage:vehicle.mileage,
            amt:vehicle.amt,
            image:vehicle.image,
            desc:vehicle.desc,
            mob_No:vehicle.mob_No,
            speed:vehicle.speed,
            engine:vehicle.engine,
            fuel:vehicle.fuel,
            type:vehicle.type
        }
    });
  

    const submitHandlet = (vehicle) => {
        const index = data.findIndex((vehicle) => {
            return (
                vehicle.id == params.id
            )
        })
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...vehicle };
        console.log(copydata[index]);
        setdata(copydata);
        toast.success("Vehicle Updated")
    }
    const deleteHandler = () => {
        const filterData = data.filter((vehicle) => vehicle.id != params.id);
        setdata(filterData)
        toast.success("Vehicle Deleted")
        navigate('/vehicle')
    }
    return vehicle ?
        <div className='w-full'>
            <div className='p-10 flex justify-around h-full '>
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
                    <div className="flex gap-4 mt-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
                        <button className="bg-orange-600 text-white px-4 py-2 rounded">Buy Now</button>
                    </div>
                </div>
            </div>
            <hr />


            <form onSubmit={handleSubmit(submitHandlet)} className='grid grid-cols-2 border pt-5 pb-5 pl-10 pr-10 bg-gray-500 w-screen'>
                <div><label className='text-xl text-gray-800 font-semibold'>Enter Vehicle Name : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('name')}
                        type='text'
                        placeholder='Vehicle Name' /></div>

                <div>
                    <label className='text-xl text-gray-800 font-semibold'>Enter description of vehicle : </label><br />
                    <textarea

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold w-150'
                        {...register('desc')}
                        type='textarea'
                        placeholder='Enter Vechile detail : ' /></div>


                <div><label className='text-xl text-gray-800 font-semibold'>Enter Comapany : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('Cname')}
                        type='text'
                        placeholder='Company Name' /></div>

                <div><label className='text-xl text-gray-800 font-semibold'>Enter Mobile Number : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('mob_No')}
                        type='number'
                        placeholder='+91 xxxxx xxxxx' /></div>


                <div><label className='text-xl text-gray-800 font-semibold'>Seat : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('Seat')}
                        type='number'
                        placeholder='Seating Capacity' /></div>

                <div><label className='text-xl text-gray-800 font-semibold'>Speed : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('speed')}
                        type='text'
                        placeholder='Distance cover/hr' /></div>

                <div><label className='text-xl text-gray-800 font-semibold'>Mileage : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('mileage')}
                        type='text'
                        placeholder='Mileage' /></div>

                <div><label className='text-xl text-gray-800 font-semibold'>Engine cc : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('engine')}
                        type='number'
                        placeholder='EngineCc' />
                </div>
                <br></br>
                <div>
                    <label className='text-xl text-gray-800 font-semibold '>Fuel Type : </label><select

                        className='text-xl text-gray-700 font-semibold'
                        {...register('fuel')}
                    >

                        <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='petrol'>Petrol</option>
                        <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='diesel'>Diesel</option>
                        <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='electric'>Electric</option>
                    </select>
                </div>




                <div><label className='text-xl text-gray-800 font-semibold'>Amount : </label>
                    <input

                        className='text-xl outline-none mb-2 text-gray-700 font-semibold'
                        {...register('amt')}
                        type='text'
                        placeholder='Amount Of Vehicle' /></div>

                <div className='text-xl mb-1 text-gray-800 font-semibold' ><label>Vehicle Type : </label><select

                    {...register('type')}
                    className='text-gray-700 font-semibold'
                >
                    <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='car'>Car</option>
                    <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='Bike'>Bike</option>
                    <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='Truck'>Truck</option>
                    <option className='bg-gray-500  p-2 text-gray-700 font-semibold' value='Bus'>Bus</option>
                </select></div>
                <div className='text-xl text-gray-800 font-semibold'>Image : <input

                    className='text-xl outline-none text-gray-700 font-semibold'
                    {...register('image')}
                    type='url'
                    placeholder='Enter the url of image' />🚑🚕...</div>
                <div className='flex gap-5'>
                    <button className='border rounded px-5 py-2 bg-gray-800 border-gray-800 mt-2' >Update Vehicle</button>
                    <button onClick={deleteHandler} className='border rounded px-5 py-2 bg-gray-800 border-gray-800 mt-2' >Delete Vehicle</button>
                </div>
            </form>
        </div> : "Loading..."
}

export default VehicleDetail