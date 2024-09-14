import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const catagory = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cloud Engineer",
  "Cyber Security Engineer",
  "Network Engineer",
  "Database Admin",
  "UI/UX Designer",
  "Product Manager",
  "Project Manager",
  "Business Analyst",
  "Data Analyst",
]

const CatagoryCarousel = () => {
  return (
    <> 
    {/* <div className='flex items-center justify-center m-auto'> */}
      <Carousel className=" max-w-xl w-full mx-auto my-28">
        <CarouselContent>
          {catagory.map((cat, index) => (
            <CarouselItem classname='md:basis-1/2 lg-basis-1/3'>
              <div>
                <div className="flex space-x-4 items-center justify-center">
                  <button className="flex justify-center items-center bg-white text-black rounded-full px-6 py-3 mt-5 w-[60%] shadow-lg">
                    {cat}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* </div> */}
    </>
  )
}

export default CatagoryCarousel
