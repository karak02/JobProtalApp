import React from 'react'
import Navbar from '../shared/Navbar'
import Job from './jobs/Job';
import Footer from '../shared/Footer';

const randomjobs = [1,2,3,4,5];

const Browser = () => {
  return (
    <>
        <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-2xl mb-4'>Search Result ({randomjobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
        {
          randomjobs.map((item,index)=>{
            return (
              <Job/>
            )
          })
        }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Browser