import React, { useEffect } from 'react'
import axios from '../utils/axios'

const Home = () => {
  const getproduct = async () =>{
    try{
      // const {data} = await axios.get('https://fakestoreapi.com/products')
      // console.log(data);

      const response = await axios.get('/products')
      console.log(response.data);

      // const strdata = await fetch('https://fakestoreapi.com/products')
      // const jsondata = await strdata.json()
      // console.log(jsondata);
      
      // 3 way to get the data from backend 
    }
    catch(error){
      console.log(error);
    }
  } 

  useEffect(()=>{
    console.log("Home.jsx mounted");
    getproduct()
    return () =>{
      console.log("Home.jsx Unmounted");
    }
  })
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get Products</button>
    </div>
  )
}

export default Home