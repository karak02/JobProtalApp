import React from 'react'
import Navbar from '../shared/Navbar'
import Herosection from './homecomponents/Herosection'
import CatagoryCarousel from './homecomponents/CatagoryCarousel'
import Latestjob from './homecomponents/Latestjob'



const Home = () => {
  return (
    <div>
        <Navbar />
        <Herosection/>
        <CatagoryCarousel/>
        <Latestjob/>
    </div>
  )
}

export default Home