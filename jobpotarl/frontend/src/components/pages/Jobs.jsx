import React from 'react'
import Navbar from '../shared/Navbar'
import FilterCard from './jobs/FilterCard'
import Job from './jobs/Job'
import Footer from '../shared/Footer';
const jobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-[20%]'>
            <FilterCard />
          </div>
          {
            jobArray.length <= 0 ? <span>Job not Found</span> : (
              <div className='flex-l h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  {
                    jobArray.map((job, index) => (
                      <div>
                        <Job />
                      </div>
                    ))
                  }
                </div>
              </div>
            )

          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Jobs