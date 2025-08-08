import React, { createContext, useState } from 'react'
export const vehiclecontext = createContext(null)
const VehicleContext = (props) => {
  const [data, setdata] = useState([
    
  {
    id:3,
  name: "Royal Enfield ",
  Cname: "Royal Enfield",
  desc: "A rugged and reliable cruiser bike built for adventure seekers.Powered by a torquey 349cc engine with fuel injection and 5-speed gearbox.Features include digital-analog console, single-channel ABS, halogen headlamp, and comfortable split seat.",
  fuel: "Petrol",
  mileage: "35 km/l",
  speed: "120 km/h",
  Seat: 2,
  engine: 349,
  amt: '16,95,000',
  mob_No: "9123456789",
  type: "Bike",
  image:"https://www.team-bhp.com/forum/attachments/motorbikes/2200854d1630479769-2021-royal-enfield-classic-350-edit-launched-rs-1-84-lakhs-fb_img_1630479693171.jpg"
},
  {
    id:4,
  name: "Baleno Zeta",
  Cname: "Maruti Suzuki",
  desc: "A premium hatchback combining modern aesthetics with advanced technology. with a 7-inch touchscreen infotainment system, Android Auto, Apple CarPlay, automatic climate control, and rear parking sensors.Top-tier safety features like dual airbags, ABS with EBD, and reverse parking camera.",
  fuel: "Petrol",
  mileage: "22.35 km/l",
  speed: "170 km/h",
  Seat: 5,
  engine: 1197,
  amt: '8,90,000',
  mob_No: "9876543210",
  type: "Car",
  image:"https://tse3.mm.bing.net/th/id/OIP.6l718-s1zWrw0Ay9pt-lJwAAAA?pid=Api&P=0&h=180"
},
{
  id:5,
  name: "Tata LPT 1618",
  Cname: "Tata Motors",
  desc: "Heavy-duty commercial truck with superior payload capacity and unmatched durability.Equipped with a powerful 5.9L diesel engine, manual transmission, and heavy load axles.Ideal for transporting goods over long distances across states with excellent mileage and load handling.",
  fuel: "Diesel",
  mileage: "6 km/l",
  speed: "80 km/h",
  Seat: 3,
  engine: 5883,
  amt: '24,50,000',
  mob_No: "9988776655",
  type: "Truck",
  image:"https://tse1.mm.bing.net/th/id/OIP.cOA9lhomnrSEla1T7k_GEAHaFS?pid=Api&P=0&h=180"
},
{
  id:6,
  name: "Volvo9400B8R",
  Cname: "Volvo",
  desc: "High-end luxury bus engineered for comfortable intercity and long-distance travel.Features include air suspension, reclining seats, LED reading lights, AC vents, infotainment system, and Wi-Fi.Built with Volvo's signature safety tech: ABS, hill start assist, fire detection, and emergency exits.",
  fuel: "Diesel",
  mileage: "2.5 km/l",
  speed: "100 km/h",
  Seat: 45,
  engine: 7698,
  amt: '95,00,000',
  mob_No: "9870012345",
  type: "Bus",
  image:"https://tse3.mm.bing.net/th/id/OIP.OnqkLjAFqHwGd_xUkud6iQHaE7?pid=Api&P=0&h=180"
},
{
      id: 1,
      name: "Fortuner",
      Cname: "Toyota",
      desc: "Toyota Fortuner is a full-size premium SUV known for its muscular design, off-road capabilities, and superior comfort.It features a bold front grille, LED DRLs, alloy wheels, and a commanding road presence.The interior boasts a touchscreen ventilated seats, ambient lighting, and dual-zone climate control.",
      mob_No: "9876543210",
      speed: "180 km/h",
      Seat: 7,
      fuel:'Diesel',
      mileage:22.4,
      engine:1948,
      amt: "45,00,000", // in INR
      type: "car",
      image: "https://tse3.mm.bing.net/th/id/OIP.2alAG9Y-wLru77pQWlsCzwHaEK?pid=Api&P=0&h=180"
    },
    {
    id: 2,
    name: "Swift",
    Cname: "Maruti Suzuki",
    desc: "The Maruti Suzuki Swift LXI is a stylish and compact hatchback designed for city drives. With excellent mileage, low maintenance cost, and a powerful engine, it’s perfect for Indian roads. It features a modern dashboard, comfortable seating, and a sleek exterior..",
    mob_No: "9123456789",
    speed: "160 km/h",
    Seat: 5,
    fuel:'Diesel',
    mileage:22.4,
    engine:1948,
    amt: "7,00,000",
    type: "car",
    image: "https://tse1.mm.bing.net/th/id/OIP.Wlo80QCszME8d61EMZElUwHaEK?pid=Api&P=0&h=180"
  },
  ])
  return (
    <vehiclecontext.Provider value={[data, setdata]}>
      {props.children}
    </vehiclecontext.Provider>
  )
}

export default VehicleContext