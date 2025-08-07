import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex justify-center text-xl gap-15 pt-4'>
        <NavLink className={(e)=>e.isActive ? "text-orange-500  " : ""} to='/'>Home</NavLink>   
        <NavLink className={(e)=>e.isActive ? "text-orange-500  " : ""} to='/service'>Service</NavLink>   
        <NavLink className={(e)=>e.isActive ? "text-orange-500  " : ""} to='/vehicle'>Vehicle</NavLink>   
        <NavLink className={`bg-gray-800 px-2 py-1 rounded {(e)=>e.isActive ? "text-orange-500  " : ""}`}to='/create'>Create Vehicle</NavLink>   
    </div>
  )
}

export default Nav