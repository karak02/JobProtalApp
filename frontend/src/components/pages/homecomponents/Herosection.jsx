import React from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";

const Herosection = () => {
  return (
    <>
      <div className='text-center flex justify-center pt-10'>
        <h2 className='bg-gray-900 w-60 h-10 text-white rounded-full flex justify-center items-center'>
          No. 1 Job Hunt Website
        </h2>
      </div>
      <div className='text-center justify-center pt-10'>
        <h2 className='font-bold text-6xl text-white'>
          Search, Apply & <br /> Get Your <span className="text-[#ED1AFF]">Dream Jobs!</span>
        </h2>
        <h3 className='pt-5 text-white'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
          when an unknown printer took a galley of type and scrambled it to make 
        </h3>
      </div>
      <div className='pt-8 text-center items-center w-[40%] shadow-lg mx-auto flex'>
        <input 
          type="search" 
          placeholder='Find your Dream Job' 
          className='outline-none h-9 rounded-l-full border-none w-full pl-4 text-white bg-gray-900' 
        />
        <button className='bg-[#ED1AFF] text-white rounded-r-full flex items-center px-4'>
          <RxMagnifyingGlass className='h-9 w-5' />
        </button>
      </div>
    </>
  )
}

export default Herosection;
