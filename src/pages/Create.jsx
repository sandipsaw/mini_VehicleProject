import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import vehicle from '../photo/car3.avif'
import { nanoid } from 'nanoid';
import { vehiclecontext } from '../context/VehicleContext';
const Create = () => {
    const {register,handleSubmit,reset} = useForm();
    const [data,setdata] = useContext(vehiclecontext)
    const submitHandlet = (vehicle) =>{
        vehicle.id = nanoid()
        const copydata = [...data];
        copydata.push(vehicle)
        setdata(copydata)
        console.log(data);
        
    }
  return (
    <div className='flex justify-between'>
        
        <form onSubmit={handleSubmit(submitHandlet)} className='flex flex-col pl-10 pr-10 pt-2 bg-gray-500 w-200'>
            <div><label className='text-xl'>Enter Vehicle Name : </label>
            <input 
              className='text-xl outline-none mb-2'
              {...register('name')}
              type='text' 
              placeholder='Vehicle Name' /></div>

              <div>
            <textarea
              className='text-xl outline-none mb-2'
              {...register('desc')}
              type='textarea' 
              placeholder='Enter Vechile detail : ' /></div>


            <div><label className='text-xl'>Enter Comapany : </label>
            <input 
              className='text-xl outline-none mb-2'
              {...register('Cname')}
              type='text' 
              placeholder='Company Name' /></div>

            <div><label className='text-xl'>Enter Mobile Number : </label>
            <input 
              className='text-xl outline-none mb-2'
              {...register('mob_No')}
              type='number' 
              placeholder='+91 xxxxx xxxxx' /></div>

            <div><label className='text-xl'>Speed : </label>
            <input 
              className='text-xl outline-none mb-2'
              {...register('speed')} 
              type='text' 
              placeholder='Distance Cover/hr' /></div>
            <div><label className='text-xl'>Enter Number of Seat : </label>
            <input 
              className='text-xl outline-none mb-2'
              {...register('Seat')}
              type='number' 
              placeholder='Seating Capacity' /></div>

            <div><label className='text-xl'>Amount : </label>
            <input 
              className='text-xl outline-none mb-2'
              {...register('amt')}
              type='number' 
              placeholder='Amount Of Vehicle' /></div>

              <div className='text-xl mb-1' ><label>Vehicle Type : </label><select
              {...register('type')} 
              >  
                <option value='car'>Car</option>
                <option value='Bike'>Bike</option>
                <option value='Truck'>Truck</option>
                <option value='Bus'>Bus</option>
              </select></div>
            <div><input 
              className='text-xl outline-none'
              {...register('image')} 
              type='url'
              placeholder='Enter the url of image'/>🚑🚕...</div>
              <div><button className='border rounded px-10 py-2 bg-gray-800 border-gray-800 mt-2' >Create Vehicle</button></div>
        </form>
        <img  className='w-500 h-150  object-cover object-bottom'src={vehicle}></img>
    </div>
  )
}

export default Create