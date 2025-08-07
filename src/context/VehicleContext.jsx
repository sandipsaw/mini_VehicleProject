import React, { createContext, useState } from 'react'
export const vehiclecontext = createContext(null)
const VehicleContext = (props) => {
    const [data,setdata] = useState([])
  return (
    <vehiclecontext.Provider value={[data,setdata]}>
        {props.children}
    </vehiclecontext.Provider>
  )
}

export default VehicleContext