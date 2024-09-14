import React from 'react'
import { Badge } from '@/components/ui/badge'
import { RxBookmarkFilled } from "react-icons/rx";

const Job = () => {
    return (
        <div>
            <a href="#" class="block max-w-sm p-6 bg-white border hover:border-gray-200  rounded-lg mb-4 shadow-lg hover:shadow-black hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-gray-700">
                <div className='flex place-content-between'>
                    <p className='text-black  '>1 days ago</p>
                    <RxBookmarkFilled className='text-black' />
                </div>
                <div className='flex pt-1'>
                    <img src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" alt="" srcset="" className='w-12 h-12 pt-1' />
                    <div>
                        <h5 class="pl-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Google</h5>
                        <h5 class="mb-2 pl-3 text-1xl font-extralight tracking-tight text-gray-900 dark:text-white">India</h5>
                    </div>
                </div>

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Full Stack Developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                <Badge className='font-bold' variant="destructive">Full Time</Badge>
                <Badge className='text-blue-700 font-bold' variant="ghost">2 positions</Badge>
                <Badge className={'text-purple-700 font-bold'} variant="ghost">45 LPA</Badge>
                <div>
                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mt-4 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Details</button>
                    <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save For Later</button>
                </div>

            </a>

        </div>
    )
}

export default Job