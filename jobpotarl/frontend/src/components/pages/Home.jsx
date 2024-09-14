import React from 'react'
import Navbar from '../shared/Navbar'
import Herosection from './homecomponents/Herosection'
import CatagoryCarousel from './homecomponents/CatagoryCarousel'



const Home = () => {
  return (
    <div>
        <Navbar />
        <Herosection/>
        <CatagoryCarousel/>
    </div>
  )
}

export default Home