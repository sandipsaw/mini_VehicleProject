import React from 'react'
import Mainroute from './routes/Mainroute'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className='bg-gray-700 w-screen h-screen text-white'>
      <Nav />
      <Mainroute />
    </div>
  )
}

export default App