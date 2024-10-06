import React from 'react'
import { Badge } from "@/components/ui/badge"
const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Latestjob = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='font-bold text-4xl'>
                <span className='text-[#ED1AFF]'>Latest and Top</span> Job Openings 🎉
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                {
                    randomjobs.slice(0, 6).map((item, index) => {
                        return (
                            <div key={item + index}>
                                <a href="#" className="block max-w-sm p-6 bg-gray-800 border hover:border-gray-200 rounded-lg shadow-lg hover:shadow-fuchsia-800 hover:bg-gray-700 dark:border-gray-700">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Google</h5>
                                    <h5 className="mb-2 text-1xl font-extralight tracking-tight text-white">India</h5>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Full Stack Developer</h5>
                                    <p className="font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                   
                                    <Badge className='font-bold text-white' variant="destructive">Full Time</Badge>
                                    <Badge className='text-blue-300 font-bold' variant="ghost">2 positions</Badge>
                                    <Badge className={'text-purple-300 font-bold'} variant="ghost">45 LPA</Badge>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Latestjob
