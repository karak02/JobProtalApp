import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
      <Carousel className="max-w-xl w-full mx-auto my-28">
        <CarouselContent>
          {catagory.map((cat, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div>
                <div className="flex space-x-4 items-center justify-center">
                  <button className="flex justify-center items-center bg-gray-900 text-white rounded-full px-6 py-3 mt-5 w-[90%] shadow-lg">
                    {cat}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </>
  )
}

export default CatagoryCarousel
